import styles from '../page.module.scss';
import { AudiophileProductWithEverything } from '@/server/types';
import { ImageViewPort } from '@/components/ui/image-view-port';
import { cn } from '@/lib/utils';

type ProductGalleryProps = {
    product: AudiophileProductWithEverything;
};
export const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
    return (
        <div className={styles.gallery}>
            {product.galery.map((image, index) => {
                return (
                    <div key={index} className={cn('relative')}>
                        <ImageViewPort
                            src={''}
                            srcSet={{
                                mobile: image.mobileUrl,
                                tablet: image.tabletUrl,
                                desktop: image.desktopUrl,
                            }}
                            fill
                            alt={'galery image' + index}
                        />
                    </div>
                );
            })}
        </div>
    );
};
