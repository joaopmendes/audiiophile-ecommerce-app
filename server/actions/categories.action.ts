'use server';
import prisma from '@/lib/prismadb';
import { CategoryWithImage } from '@/server/types';

export const getCategories = async (): Promise<CategoryWithImage[]> => {
    return prisma.category.findMany({
        include: {
            categoryImage: true,
        },
    });
};
