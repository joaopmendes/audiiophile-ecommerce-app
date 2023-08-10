import CategoryPage from '@/features/category-page';

type CategoryRouteProps = {
    params: {
        slug: string;
    };
};
export default function CategoryRoute(props: CategoryRouteProps) {
    return <CategoryPage slug={props.params.slug} />;
}
