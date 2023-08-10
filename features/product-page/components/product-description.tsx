import { AudiophileProductWithEverything } from '@/server/types';
import { ProductFeatures } from '@/features/product-page/components/product-features';
import { ProductBox } from '@/features/product-page/components/product-box';

type ProductDescriptionProps = {
    product: AudiophileProductWithEverything;
};
export const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
    return (
        <div className={'flex flex-wrap gap-12'}>
            <div className={'w-full desktop:w-[60%]'}>
                <ProductFeatures product={product} />
            </div>
            <div className={'w-full desktop:w-[35%]'}>
                <ProductBox product={product} />
            </div>
        </div>
    );
};
