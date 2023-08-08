import * as PrismaClient from '@prisma/client';

export type CategoryWithImage = PrismaClient.Category & {
    categoryImage: PrismaClient.CategoryImage;
};
export type Category = PrismaClient.Category;
