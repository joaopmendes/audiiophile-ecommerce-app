'use client';
import { NumberInput } from '@/components/ui/number-input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AudiophileProductWithEverything } from '@/server/types';

type AddToCartProps = {
    product: AudiophileProductWithEverything;
};
export const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
    const [value, setValue] = useState(1);
    return (
        <div className={'flex gap-6'}>
            <NumberInput value={value} setValue={setValue} min={1} />
            <Button className={'capitalize'} onClick={() => console.log(JSON.stringify(product, null, 2))}>
                Add to cart
            </Button>
        </div>
    );
};
