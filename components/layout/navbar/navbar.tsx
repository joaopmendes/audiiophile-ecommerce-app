'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { UserButton } from '@clerk/nextjs';
import { AppLogo } from '@/components/AppLogo';
import { CategoryWithImage } from '@/server/types';
import { NavbarDesktop } from './navbar-desktop';
import { CategoriesContent } from './categories-content';

type NavbarProps = {
    categories: CategoryWithImage[];
};
export const Navbar: React.FC<NavbarProps> = ({ categories }) => {
    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

    return (
        <header className={'relative bg-slate'}>
            <nav
                className={'navbar-border container mx-auto flex items-center justify-between border-opacity-20 py-10'}
            >
                <div className={'flex items-center gap-9'}>
                    {/* mobile/tablet */}
                    <div className={'relative h-4 w-4 cursor-pointer desktop:hidden'}>
                        <Image
                            src={'/shared/tablet/icon-hamburger.svg'}
                            alt={'Hamburger Icon'}
                            width='16'
                            height='15'
                            onClick={() => setMobileNavbarOpen((mobileNavbarOpen) => !mobileNavbarOpen)}
                        />
                    </div>

                    {/* shared */}
                    <AppLogo />
                </div>

                {/* desktop navbar */}
                <NavbarDesktop categories={categories} className={'desktop:flex'} />

                {/* mobile/tablet navbar */}
                <motion.ul
                    layout
                    initial={{ width: 0 }}
                    animate={{ width: mobileNavbarOpen ? '100%' : '0' }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                        `absolute -bottom-[700px] left-0 z-10 h-[700px] bg-pure-white tablet:-bottom-[348px] tablet:h-[348px] desktop:hidden`,
                        {
                            [`nav-closed`]: !mobileNavbarOpen,
                        }
                    )}
                >
                    <div className='flex h-full w-full flex-col items-center justify-center px-8'>
                        <CategoriesContent categories={categories} />
                    </div>
                </motion.ul>

                <div className={'flex items-center justify-center gap-6'}>
                    <div className={'relative h-5 w-6 cursor-pointer'}>
                        <Image className={'inline-block'} src={'/shared/desktop/icon-cart.svg'} alt={'cart'} fill />
                    </div>
                    <UserButton />
                </div>
            </nav>
        </header>
    );
};
