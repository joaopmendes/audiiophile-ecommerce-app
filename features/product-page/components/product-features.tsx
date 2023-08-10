import { AudiophileProductWithEverything } from '@/server/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { convertNumberToCurrency } from '@/utils/convertNumberToCurrency';
import { AddToCart } from '@/features/product-page/components/add-to-cart';

type ProductFeaturesProps = {
    product: AudiophileProductWithEverything;
};
export const ProductFeatures: React.FC<ProductFeaturesProps> = ({ product }) => {
    const features = product.features.split('\n');
    return (
        <div className={'space-y-10'}>
            <h3 className={'text-h3 uppercase'}>Features</h3>
            {features.map((feature, index) => (
                <p key={index} className={'text-body opacity-50'}>
                    {feature}
                </p>
            ))}
        </div>
    );
};
