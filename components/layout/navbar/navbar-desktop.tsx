'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { CategoryWithImage } from '@/server/types';

export type NavbarDesktopProps = {
    categories: CategoryWithImage[];
    show?: boolean;
} & React.ComponentProps<'ul'>;
export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ className, categories, show, ...rest }) => {
    const pathName = usePathname();
    const linkClasses = 'text-sub-title uppercase text-white';
    return (
        <ul className={cn('hidden items-center justify-between space-x-10 text-white ', className)} {...rest}>
            <li>
                <Link href={'/'} className={cn(linkClasses, { ['text-orange']: pathName === '/' })}>
                    Home
                </Link>
            </li>

            {categories?.map((category, index) => {
                const routePath = `/categories/${category.slug}`;

                return (
                    <li key={index}>
                        <Link
                            href={routePath}
                            className={cn(linkClasses, { 'text-orange': pathName.startsWith(routePath) })}
                        >
                            {category.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
