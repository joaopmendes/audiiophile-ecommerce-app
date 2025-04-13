import { Spinner } from '@/components/ui/spinner';
import ProductPage from '@/features/product-page';
import { Suspense } from 'react';

type CategoryRouteProps = {
    params: Promise<{
        slug: string;
    }>;
};
export default async function CategoryRoute(props: CategoryRouteProps) {
    const params = await props.params;
    return (
        <Suspense
            fallback={
                <div className='absolute left-1/2 top-1/2 translate-y--1/2'>
                    <Spinner />
                </div>
            }
        >
            <ProductPage slug={params.slug} />
        </Suspense>
    );
}
