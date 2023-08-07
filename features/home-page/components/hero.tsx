import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className={'h-full'}>
            <div className={'hero-background'}></div>
            <div className={'container grid h-full grid-cols-1 items-center desktop:grid-cols-2'}>
                <div
                    className={
                        'flex flex-col items-center justify-center text-center desktop:items-start desktop:text-left'
                    }
                >
                    <p className={'text-overline text-white opacity-50'}>New Product</p>
                    <h1 className={'my-4 w-[400px] text-h1 text-white'}>XX99 Mark II Headphones</h1>
                    <p className={'w-[350px] text-body text-white'}>
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music
                        enthusiast.
                    </p>

                    <Button variant={'default'} className={'mt-14 max-w-fit'}>
                        See Product
                    </Button>
                </div>
            </div>
        </div>
    );
};
