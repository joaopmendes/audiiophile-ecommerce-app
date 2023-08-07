import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type AppLogoProps = {
    className?: string;
};
export const AppLogo: React.FC<AppLogoProps> = ({ className }) => {
    return (
        <Link href={'/'} className={cn('relative', className)}>
            <Image src={'/shared/desktop/logo.svg'} alt={'Audiophile'} width='143' height='25' />
        </Link>
    );
};
