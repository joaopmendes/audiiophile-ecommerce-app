import routes from '@/constants/routes';
import { CategoryItem } from '@/components/layout/navbar/category-item';
import { CategoryWithImage } from '@/server/types';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@/components/ui/spinner';
import { getCategories } from '@/server/actions/categories.action';

type CategoriesNavbarProps = {};
export const CategoriesNavbar: React.FC<CategoriesNavbarProps> = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });

    if (isLoading) return <Spinner />;
    if (error) return <p className={'text-body text-red'}>Something went wrong... Please refresh the page</p>;
    return (
        <div className={'grid w-full grid-cols-1 gap-14 tablet:grid-cols-3 '}>
            {data?.map((category, index) => <CategoryItem key={index} category={category} />)}
        </div>
    );
};
