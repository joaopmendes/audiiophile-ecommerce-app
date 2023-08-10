'use server';
import prisma from '@/lib/prismadb';
import { AudiophileProductWithEverything, Category, CategoryWithImage, CategoryWithProducts } from '@/server/types';

export const getProductBySlug = async (slug: string): Promise<AudiophileProductWithEverything> => {
    return prisma.audiophileProduct.findUniqueOrThrow({
        where: {
            slug,
        },
        include: {
            categoryImagePreview: true,
            productImage: true,
            featuresIncluded: true,
            galery: true,
            relatedProducts: {
                include: {
                    relatedProductImage: true,
                },
            },
        },
    });
};

export const getProductById = async (id: string): Promise<AudiophileProductWithEverything> => {
    return prisma.audiophileProduct.findUniqueOrThrow({
        where: {
            id,
        },
        include: {
            categoryImagePreview: true,
            productImage: true,
            featuresIncluded: true,
            galery: true,
        },
    });
};
