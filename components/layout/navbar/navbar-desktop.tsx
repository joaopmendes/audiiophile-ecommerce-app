import Link from 'next/link';
import routes from '@/constants/routes';
import { cn } from '@/lib/utils';

type NavbarDesktopProps = {
    show?: boolean;
} & React.ComponentProps<'ul'>;
export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ className, show, ...rest }) => {
    return (
        <ul className={cn('hidden items-center justify-between space-x-10 text-white ', className)} {...rest}>
            <li>
                <Link href={'/'} className={cn('text-sub-title uppercase desktop:flex')}>
                    Home
                </Link>
            </li>

            {routes.map((route, index) => (
                <li key={index}>
                    <Link href={route.path} className={'text-sub-title uppercase text-white'}>
                        {route.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
