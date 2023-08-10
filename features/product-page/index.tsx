import { FooterBanner } from '@/components/layout/footer-banner';
import { CategoriesNavbar } from '@/components/layout/navbar/categories';
import { getProductBySlug } from '@/server/actions/products.action';
import { ProductPreview } from '@/features/product-page/components/product-preview';
import { ProductDescription } from '@/features/product-page/components/product-description';
import { ProductGallery } from '@/features/product-page/components/product-gallery';
import { RelatedProducts } from '@/features/product-page/components/related-products';

type ProductPageProps = {
    slug: string;
};
export default async function ProductPage({ slug }: ProductPageProps) {
    const product = await getProductBySlug(slug);
    return (
        <div className={'flex flex-col space-y-40'}>
            <div className='container mt-40 space-y-20'>
                <ProductPreview product={product} />
                <ProductDescription product={product} />

                <ProductGallery product={product} />
                <RelatedProducts product={product} />
            </div>

            <div className='container'>
                <CategoriesNavbar />
            </div>
            <FooterBanner />
        </div>
    );
}
