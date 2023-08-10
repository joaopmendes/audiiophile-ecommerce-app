import * as PrismaClient from '@prisma/client';

export type AudiophileProduct = PrismaClient.AudiophileProduct;
export type AudiophileProductWithEverything = PrismaClient.AudiophileProduct & {
    categoryImagePreview: AudiophileProductCategoryPreviewImage;
    productImage: PrismaClient.ProductImage;
    featuresIncluded: PrismaClient.Feature[];
    galery: PrismaClient.Image[];
    relatedProducts: RelatedProductWithIamge[];
};
export type RelatedProductWithIamge = PrismaClient.RelatedProduct & {
    relatedProductImage: PrismaClient.RelatedProductImage;
};
export type AudiophileProductCategoryPreviewImage = PrismaClient.CategoryPreviewImage;
export type AudiophileProductWithCategoryPreviewImage = PrismaClient.AudiophileProduct & {
    categoryImagePreview: AudiophileProductCategoryPreviewImage;
};

export type CategoryWithImage = PrismaClient.Category & {
    categoryImage: PrismaClient.CategoryImage;
};
export type CategoryWithProducts = PrismaClient.Category & {
    products: AudiophileProductWithCategoryPreviewImage[];
};
export type Category = PrismaClient.Category;
