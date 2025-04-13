import React from 'react';
import NavbarDesktopWrapper from './navbar-desktop-wrapper';
import { CategoriesNavbar } from './categories-navbar';
import { Navbar } from './navbar';
import { getCategoriesWithImage } from '@/server/actions/categories.action';

export default async function NavbarServer() {
    const categories = await getCategoriesWithImage();

    return <Navbar categories={categories} />;
}
