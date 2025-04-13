import { AudiophileProductWithEverything } from '@/server/types';
import { ImageViewPort } from '@/components/ui/image-view-port';
import { ProductInfo } from '@/features/product-page/components/product-info';
import { AddToCart } from '@/features/product-page/components/add-to-cart';

type ProductPreviewProps = {
    product: AudiophileProductWithEverything;
};
export const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
    return (
        <>
            <div className={'grid grid-cols-1 tablet:grid-cols-2 '}>
                <div className='relative h-[327px] tablet:h-[480px] desktop:h-[580px]'>
                    <ImageViewPort
                        srcSet={{
                            mobile: product.productImage.mobileUrl,
                            tablet: product.productImage.tabletUrl,
                            desktop: product.productImage.desktopUrl,
                        }}
                        src={''}
                        fill
                        alt={product.name}
                    />
                </div>

                <div className={'tablet:pl-24'}>
                    <ProductInfo product={product} />
                    <AddToCart product={product} />
                </div>
            </div>
        </>
    );
};
