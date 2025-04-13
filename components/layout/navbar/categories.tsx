'use client';
import { CategoryItem } from '@/components/layout/navbar/category-item';
import { Spinner } from '@/components/ui/spinner';
import { getCategoriesWithImage } from '@/server/actions/categories.action';
import { Suspense } from 'react';

type CategoriesNavbarProps = {};

const CategoriesContent: React.FC = async () => {
    const data = await getCategoriesWithImage();

    return (
        <div className={'grid w-full grid-cols-1 gap-14 tablet:grid-cols-3'}>
            {data.map((category, index) => (
                <CategoryItem key={index} category={category} />
            ))}
        </div>
    );
};

export const CategoriesNavbar: React.FC<CategoriesNavbarProps> = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <CategoriesContent />
        </Suspense>
    );
};
