'use server';
import prisma from '@/lib/prismadb';
import { Category, CategoryWithImage, CategoryWithProducts } from '@/server/types';

export const getCategories = async (): Promise<Category[]> => {
    return prisma.category.findMany();
};
export const getCategoriesWithImage = async (): Promise<CategoryWithImage[]> => {
    return prisma.category.findMany({
        include: {
            categoryImage: true,
        },
    });
};
export const getCategoryBySlugWithProducts = async (slug: string): Promise<CategoryWithProducts> => {
    return prisma.category.findUniqueOrThrow({
        where: {
            slug,
        },
        include: {
            products: {
                include: {
                    categoryImagePreview: true,
                },
            },
        },
    });
};

export const getCategoryByIdWithProducts = async (id: string): Promise<CategoryWithProducts> => {
    return prisma.category.findUniqueOrThrow({
        where: {
            id,
        },
        include: {
            products: {
                include: {
                    categoryImagePreview: true,
                },
            },
        },
    });
};
