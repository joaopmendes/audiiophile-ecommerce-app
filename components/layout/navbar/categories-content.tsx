import { CategoryItem } from '@/components/layout/navbar/category-item';
import { CategoryWithImage } from '@/server/types';

type CategoriesContentProps = {
    categories: CategoryWithImage[];
};
export const CategoriesContent: React.FC<CategoriesContentProps> = ({ categories }) => {
    return (
        <div className={'grid w-full grid-cols-1 gap-14 tablet:grid-cols-3'}>
            {categories.map((category, index) => (
                <CategoryItem key={index} category={category} />
            ))}
        </div>
    );
};
