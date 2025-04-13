import Image from 'next/image';
import { ImageViewPort } from '@/components/ui/image-view-port';

export const FooterBanner = () => {
    return (
        <div className={' container'} style={{ marginBottom: '100px' }}>
            <div className={'grid grid-cols-1 gap-6 desktop:grid-cols-2'}>
                <div
                    className={
                        'desktop:mx-none order-2 mx-auto flex w-[90%]  flex-col justify-center gap-6 desktop:order-1 desktop:w-[80%]'
                    }
                >
                    <h2 className={'w-full text-center text-body text-h2 uppercase text-pure-dark desktop:text-left'}>
                        Bringing you the <span className={'text-orange'}>best</span> audio gear
                    </h2>
                    <p className={'w-full text-center text-body text-pure-dark opacity-50 desktop:text-left'}>
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                        rooms available for you to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable
                        audio equipment.
                    </p>
                </div>
                <div className={'relative h-[300px] w-full desktop:h-[588px] desktop:w-full'}>
                    <ImageViewPort
                        className={'order-1 tablet:order-2'}
                        srcSet={{
                            mobile: '/shared/mobile/image-best-gear.jpg',
                            tablet: '/shared/tablet/image-best-gear.jpg',
                            desktop: '/shared/desktop/image-best-gear.jpg',
                        }}
                        fill
                        alt={'best gear'}
                        src={''}
                    />
                </div>
            </div>
        </div>
    );
};
