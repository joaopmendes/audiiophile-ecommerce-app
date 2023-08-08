'use client';
import Link from 'next/link';
import routes from '@/constants/routes';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getCategoriesWithImage } from '@/server/actions/categories.action';

type NavbarDesktopProps = {
    show?: boolean;
} & React.ComponentProps<'ul'>;
export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ className, show, ...rest }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategoriesWithImage,
    });
    const pathName = usePathname();
    const linkClasses = 'text-sub-title uppercase text-white';

    if (isLoading || error) return null;
    return (
        <ul className={cn('hidden items-center justify-between space-x-10 text-white ', className)} {...rest}>
            <li>
                <Link href={'/'} className={cn(linkClasses, { ['text-orange']: pathName === '/' })}>
                    Home
                </Link>
            </li>

            {data?.map((category, index) => {
                const routePath = `/categories/${category.slug}`;

                return (
                    <li key={index}>
                        <Link
                            href={routePath}
                            className={cn(linkClasses, { ['text-orange']: pathName.startsWith(routePath) })}
                        >
                            {category.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
