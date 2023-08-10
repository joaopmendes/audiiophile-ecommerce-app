import { AudiophileProductWithEverything } from '@/server/types';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ImageViewPort } from '@/components/ui/image-view-port';

type RelatedProductsProps = {
    product: AudiophileProductWithEverything;
};
export const RelatedProducts: React.FC<RelatedProductsProps> = ({ product }) => {
    return (
        <div className={'space-y-20'}>
            <h2 className={'text-center text-h2 uppercase'}>You may also like</h2>
            <div className={'grid  grid-cols-1 gap-12 tablet:grid-cols-3'}>
                {product.relatedProducts.map((product, index) => {
                    return (
                        <div key={index} className={'flex flex-col justify-center space-y-10'}>
                            <div className={'bg-grey relative h-32  rounded-xl tablet:h-80'}>
                                <ImageViewPort
                                    src={''}
                                    srcSet={{
                                        mobile: product.relatedProductImage.mobileUrl,
                                        tablet: product.relatedProductImage.tabletUrl,
                                        desktop: product.relatedProductImage.desktopUrl,
                                    }}
                                    fill
                                    quality={100}
                                    alt={'galery image' + index}
                                />
                            </div>
                            <h3 className={'mt-4 text-center text-h5 uppercase'}>{product.name}</h3>
                            <Button className={'uppercase'}>See Product</Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
// <ImageViewPort
//     src={''}
//     srcSet={{
//         mobile: image.mobileUrl,
//         tablet: image.tabletUrl,
//         desktop: image.desktopUrl,
//     }}
//     fill
//     alt={'galery image' + index}
// />
