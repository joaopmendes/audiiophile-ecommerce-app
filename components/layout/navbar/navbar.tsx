'use client';
import Link from 'next/link';
import Image from 'next/image';
import routes from '@/constants/routes';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CategoriesNavbar } from '@/components/layout/navbar/categories';
import { UserButton } from '@clerk/nextjs';

export const Navbar: React.FC<{}> = (props) => {
    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
    return (
        <header className={'relative bg-dark'}>
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
                    <Link href={'/'}>
                        <Image src={'/shared/desktop/logo.svg'} alt={'Audiophile'} width='143' height='25' />
                    </Link>
                </div>

                {/* desktop navbar */}
                <ul className={'hidden items-center justify-between space-x-10 text-white desktop:flex'}>
                    <li>
                        <Link
                            href={'/'}
                            className={'hidden text-sub-title text-sub-title uppercase text-white  desktop:block'}
                        >
                            Home
                        </Link>
                    </li>

                    {routes.map((route, index) => (
                        <li key={index}>
                            <Link href={route.path} className={'text-sub-title text-sub-title uppercase  text-white'}>
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>

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
                        <CategoriesNavbar />
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
