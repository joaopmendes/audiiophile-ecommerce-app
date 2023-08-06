import routes from '@/constants/routes';
import { CategoryItem } from '@/components/layout/navbar/category-item';

export const CategoriesNavbar: React.FC<{}> = (props) => {
    return (
        <div className={'grid w-full grid-cols-1 gap-14 tablet:grid-cols-3 '}>
            {routes.map((route, index) => (
                <CategoryItem key={index} route={route} />
            ))}
        </div>
    );
};
