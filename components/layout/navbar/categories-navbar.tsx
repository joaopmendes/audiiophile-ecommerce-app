import { Suspense } from 'react';
import { CategoriesContent } from './categories-content';
import { Spinner } from '@/components/ui/spinner';
import { getCategoriesWithImage } from '@/server/actions/categories.action';

type CategoriesNavbarProps = {};

export const CategoriesNavbar: React.FC<CategoriesNavbarProps> = async () => {
    const categories = await getCategoriesWithImage();

    return <CategoriesContent categories={categories} />;
};
