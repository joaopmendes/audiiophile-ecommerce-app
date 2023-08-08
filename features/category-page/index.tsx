import { getCategoryBySlugWithProducts } from '@/server/actions/categories.action';
import { ProductList } from '@/features/category-page/components/product-list/product-list';
import { FooterBanner } from '@/components/layout/footer-banner';
import { CategoriesNavbar } from '@/components/layout/navbar/categories';

type CategoryPageProps = {
    slug: string;
};
export default async function CategoryPage({ slug }: CategoryPageProps) {
    const category = await getCategoryBySlugWithProducts(slug);

    return (
        <div className={'flex flex-col space-y-40'}>
            <header className={'bg-slate'}>
                <h1 className={'p-36 text-center text-h2 uppercase text-white'}>{slug}</h1>
            </header>

            <section className={'container'}>
                <ProductList products={category.products} />
            </section>

            <div className='container'>
                <CategoriesNavbar />
            </div>

            <FooterBanner />
        </div>
    );
}
