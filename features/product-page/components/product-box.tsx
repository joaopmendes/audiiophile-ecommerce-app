import { AudiophileProductWithEverything } from '@/server/types';

type ProductBoxProps = {
    product: AudiophileProductWithEverything;
};
export const ProductBox: React.FC<ProductBoxProps> = ({ product }) => {
    return (
        <div className={'space-y-10'}>
            <div className={'grid grid-cols-2 desktop:grid-cols-1 desktop:space-y-10'}>
                <h3 className={'text-h3 uppercase'}>In the box</h3>

                <div className={'flex flex-col space-y-2'}>
                    {product.featuresIncluded.map((feature, index) => (
                        <p className={'text-body'} key={index}>
                            <span className={'mr-4 text-orange'}>{feature.quantity}x</span>{' '}
                            <span className={'opacity-50'}>{feature.name}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};
