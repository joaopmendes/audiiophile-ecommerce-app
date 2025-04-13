import { getCategoriesWithImage } from '@/server/actions/categories.action';
import React from 'react';
import { NavbarDesktop, NavbarDesktopProps } from './navbar-desktop';

type NavbarDesktopWrapperProps = {
    show?: boolean;
} & Omit<NavbarDesktopProps, 'categories'>;

export default async function NavbarDesktopWrapper(props: NavbarDesktopWrapperProps) {
    const categories = await getCategoriesWithImage();

    return <NavbarDesktop {...props} categories={categories} />;
}
