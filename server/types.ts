import * as PrismaClient from '@prisma/client';

export type AudiophileProduct = PrismaClient.AudiophileProduct;
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
