'use client';
import { NumberInput } from '@/components/ui/number-input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type AddToCartProps = {
    // product: AudiophileProductWithEverything;
};
export const AddToCart: React.FC<AddToCartProps> = ({}) => {
    const [value, setValue] = useState(1);
    return (
        <div className={'flex gap-6'}>
            <NumberInput value={value} setValue={setValue} min={1} />
            <Button className={'capitalize'}>Add to cart</Button>
        </div>
    );
};
