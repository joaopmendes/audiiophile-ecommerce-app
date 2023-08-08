import { AudiophileProduct, AudiophileProductWithCategoryPreviewImage } from '@/server/types';
import { ImageViewPort } from '@/components/ui/image-view-port';
import { ProductItem } from '@/features/category-page/components/product-list/product-item';

type ProductListProps = {
    products: AudiophileProductWithCategoryPreviewImage[];
};
export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className={'space-y-40'}>
            {products.map((product, index) => (
                <ProductItem key={product.slug} product={product} index={index} />
            ))}
        </div>
    );
};
