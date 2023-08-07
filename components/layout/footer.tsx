import { AppLogo } from '@/components/AppLogo';
import { NavbarDesktop } from '@/components/layout/navbar/navbar-desktop';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className={'mt-24 w-full bg-dark text-white'}>
            <div className='container flex flex-col gap-6 px-4 py-10 '>
                <div
                    className={
                        'flex flex-col items-center gap-6 tablet:items-start desktop:flex-row desktop:justify-between'
                    }
                >
                    <AppLogo className={'inline-block'} />
                    <NavbarDesktop className={'flex flex-col space-x-0 tablet:flex-row tablet:space-x-10'} />
                </div>

                <div className={'footer-grid'}>
                    <p className={'text-body text-white opacity-50'} id={'info'}>
                        Audiophile is an all in one stop to fulfill your audio needs. We&apos; re a small team of music
                        lovers and sound specialists who are devoted to helping you get the most out of personal audio.
                        Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <p id={'note'} className={'text-body text-white opacity-50'}>
                        Copyright 2021. All Rights Reserved
                    </p>
                    <p id={'social'}>
                        <Image src={'/shared/desktop/icon-facebook.svg'} alt={'facebook'} width='24' height='24' />
                        <Image src={'/shared/desktop/icon-instagram.svg'} alt={'instagram'} width='24' height='24' />
                        <Image src={'/shared/desktop/icon-twitter.svg'} alt={'twitter'} width='24' height='24' />
                    </p>
                </div>
            </div>
        </footer>
    );
};
