import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const FeaturedProducts: React.FC<{}> = (props) => {
    return (
        <div className={'grid grid-cols-1 gap-6'}>
            {/*  First Product  */}
            <div
                className={
                    'desktop relative -z-20 grid grid-cols-1 gap-16 rounded-2xl bg-orange py-10 desktop:py-0 ' +
                    'pt-10 desktop:grid-cols-2 desktop:pt-20'
                }
            >
                <div className={'relative flex justify-center desktop:-bottom-2 desktop:items-end desktop:justify-end'}>
                    <div
                        className={
                            'absolute -top-96 -z-10 h-[944px] w-[944px] desktop:left-[-78px]  desktop:top-0 desktop:top-[-162px]'
                        }
                    >
                        <Image
                            src={'/home/desktop/pattern-circles.svg'}
                            fill
                            alt={'pattern'}
                            className={'absolute bottom-24 left-14'}
                        />
                    </div>
                    <div className={'relative w-40 desktop:w-80'}>
                        <Image src={'/home/desktop/image-speaker-zx9.png'} width={410} height={493} alt={'speaker'} />
                    </div>
                </div>

                <div className='flex w-full justify-center'>
                    <div className={'desktop:w-54 relative flex w-64 flex-col gap-8 desktop:-bottom-8 desktop:ml-20'}>
                        <h2 className={'text-center text-h1 uppercase text-white desktop:text-left'}>ZX9 speaker</h2>
                        <p className={'text-center text-body text-white desktop:text-left'}>
                            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                        </p>

                        <Button variant={'ghost'} className={'mx-auto max-w-fit desktop:mx-0'}>
                            See Product
                        </Button>
                    </div>
                </div>
            </div>
            {/*  Second Product  */}
            <div className={'relative flex h-80 w-full flex-col justify-center gap-6 pl-10'}>
                <div className={'absolute bottom-0 left-0 right-0 top-0 -z-10'}>
                    <Image
                        src={'/home/desktop/image-speaker-zx7.jpg'}
                        fill
                        style={{ objectFit: 'initial' }}
                        alt={'pattern'}
                    />
                </div>

                <h2 className={'text-h4 uppercase text-dark'}>ZX7 speaker</h2>
                <div className={'w-60'}>
                    <Button variant={'outline'}>See Product</Button>
                </div>
            </div>

            {/*  Third Product  */}
            <div className={'relative grid h-[400px] grid-cols-1 gap-6 tablet:h-[320px] tablet:grid-cols-2 '}>
                <div className={'relative h-[200px] tablet:h-full'}>
                    <Image
                        src={'/home/desktop/image-earphones-yx1.jpg'}
                        fill
                        style={{ objectFit: 'initial' }}
                        alt={'pattern'}
                    />
                </div>
                <div className={'flex flex-col items-start justify-center gap-12 rounded-2xl bg-gray p-10'}>
                    <h2 className={'text-h4 uppercase text-dark'}>YX1 speaker</h2>
                    <div className={'w-60'}>
                        <Button variant={'outline'}>See Product</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
