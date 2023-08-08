import { AudiophileProduct, AudiophileProductWithCategoryPreviewImage } from '@/server/types';
import { ImageViewPort } from '@/components/ui/image-view-port';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ProductItemProps = {
    product: AudiophileProductWithCategoryPreviewImage;
    index: number;
};
export const ProductItem: React.FC<ProductItemProps> = ({ product, index }) => {
    return (
        <div className={cn(`flex flex-wrap desktop:h-[500px]`, { 'flex-row-reverse': !(index % 2 === 0) })}>
            <div className='relative h-[352px] w-full desktop:h-full desktop:w-[50%]'>
                <ImageViewPort
                    className={'order-1 tablet:order-2'}
                    srcSet={{
                        mobile: product.categoryImagePreview.mobileUrl,
                        tablet: product.categoryImagePreview.tabletUrl,
                        desktop: product.categoryImagePreview.desktopUrl,
                    }}
                    fill
                    quality={100}
                    alt={product.name}
                    src={''}
                />
            </div>

            <div
                className={
                    'flex w-full flex-col items-center justify-center pt-10 text-center desktop:w-[50%] desktop:items-start desktop:pl-24 desktop:text-left'
                }
            >
                {product.isNew && <p className={'text-overline text-orange opacity-50'}>New Product</p>}
                <h1 className={'my-4 w-[400px] text-h2'}>{product.name}</h1>
                <p className={'w-[350px] text-body opacity-50'}>{product.description}</p>

                <Link href={`/products/${product.slug}`}>
                    <Button variant={'default'} className={'mt-14 max-w-fit'}>
                        See Product
                    </Button>
                </Link>
            </div>
        </div>
    );
};
