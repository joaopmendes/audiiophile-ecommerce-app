import ProductPage from '@/features/product-page';

type CategoryRouteProps = {
    params: {
        slug: string;
    };
};
export default function CategoryRoute(props: CategoryRouteProps) {
    return <ProductPage slug={props.params.slug} />;
}
