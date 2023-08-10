import { AudiophileProductWithEverything } from '@/server/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { convertNumberToCurrency } from '@/utils/convertNumberToCurrency';
import { AddToCart } from '@/features/product-page/components/add-to-cart';

type ProductInfoProps = {
    product: AudiophileProductWithEverything;
};
export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <div
            className={
                'flex w-full flex-col items-start pt-10 text-left tablet:mt-0 tablet:items-start tablet:justify-center'
            }
        >
            {product.isNew && <p className={'text-overline text-orange opacity-50'}>New Product</p>}
            <h1 className={'my-4 w-[400px] text-h2'}>{product.name}</h1>
            <p className={'w-[350px] text-body opacity-50 '}>{product.description}</p>
            <p className={'my-4 text-h6'}>{convertNumberToCurrency(product.price)}</p>
        </div>
    );
};
