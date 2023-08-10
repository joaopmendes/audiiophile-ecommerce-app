import seedDbData from './seedDbData';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createCategories() {
    const count = await prisma.category.count();
    if (count !== 0) return;
    await prisma.category.create({
        data: {
            name: 'earphones',
            slug: 'earphones',
            categoryImage: {
                create: {
                    url: '/shared/desktop/image-category-thumbnail-earphones.png',
                    width: 178,
                    height: 161,
                },
            },
        },
    });
    await prisma.category.create({
        data: {
            name: 'headphones',
            slug: 'headphones',
            categoryImage: {
                create: {
                    url: '/shared/desktop/image-category-thumbnail-headphones.png',
                    width: 120,
                    height: 160,
                },
            },
        },
    });
    await prisma.category.create({
        data: {
            name: 'speakers',
            slug: 'speakers',
            categoryImage: {
                create: {
                    url: '/shared/desktop/image-category-thumbnail-speakers.png',
                    width: 121,
                    height: 146,
                },
            },
        },
    });
}

export const databaseSeed = async () => {
    try {
        await createCategories();

        const earphonesCategoryId = await prisma.category.findFirst({
            where: {
                name: 'earphones',
            },
            select: {
                id: true,
            },
        });
        const headphonesCategoryId = await prisma.category.findFirst({
            where: {
                name: 'headphones',
            },
            select: {
                id: true,
            },
        });
        const speakersCategoryId = await prisma.category.findFirst({
            where: {
                name: 'speakers',
            },
            select: {
                id: true,
            },
        });

        const promises = seedDbData.map(async (product) => {
            console.log(product.slug);
            return prisma.audiophileProduct.create({
                data: {
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    isNew: product.new,
                    description: product.description,
                    features: product.features,

                    featuresIncluded: {
                        create: product.includes.map((s) => ({ name: s.item, quantity: '' + s.quantity })),
                    },
                    category: {
                        connect: {
                            id:
                                (product.category === 'earphones'
                                    ? earphonesCategoryId?.id
                                    : product.category === 'headphones'
                                    ? headphonesCategoryId?.id
                                    : speakersCategoryId?.id) || '',
                        },
                    },
                    productImage: {
                        create: {
                            tabletUrl: product.image.tablet,
                            mobileUrl: product.image.mobile,
                            desktopUrl: product.image.desktop,
                        },
                    },
                    categoryImagePreview: {
                        create: {
                            tabletUrl: product.categoryImage.tablet,
                            mobileUrl: product.categoryImage.mobile,
                            desktopUrl: product.categoryImage.desktop,
                        },
                    },
                    galery: {
                        create: Object.values(product.gallery).map((galleryImage, index) => ({
                            tabletUrl: galleryImage.tablet,
                            mobileUrl: galleryImage.mobile,
                            desktopUrl: galleryImage.desktop,
                            isBig: index === 2,
                        })),
                    },
                    relatedProducts: {
                        create: product.others.map((relatedProduct) => ({
                            slug: relatedProduct.slug,
                            name: relatedProduct.name,
                            relatedProductImage: {
                                create: {
                                    tabletUrl: relatedProduct.image.tablet,
                                    mobileUrl: relatedProduct.image.mobile,
                                    desktopUrl: relatedProduct.image.desktop,
                                },
                            },
                        })),
                    },
                },
            });
        });

        await Promise.all(promises);
    } catch (error) {
        console.log(error);
    }
};

databaseSeed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
