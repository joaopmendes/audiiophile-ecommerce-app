import { Route } from '@/constants/routes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CateogryItemProps = {
    route: Route;
};
export const CategoryItem: React.FC<CateogryItemProps> = ({ route }) => {
    return (
        <div className={'relative flex h-40 w-full flex-col items-center justify-center rounded-2xl bg-gray '}>
            <div className={'relative -top-[34px]'}>
                <div className={'relative'}>
                    <Image
                        src={route.image.src}
                        alt={route.name}
                        width={route.image.width}
                        height={route.image.height}
                    />
                </div>

                <div className={'text-center'}>
                    <p className={'text-bold  text-h6 uppercase'}>{route.name}</p>
                    <Link
                        href={route.path}
                        className={'flex items-center justify-center text-body uppercase text-dark opacity-50'}
                    >
                        Shop
                        <Image
                            src={'/shared/desktop/icon-arrow-right.svg'}
                            width='8'
                            height='12'
                            alt={'arrow-right'}
                            className={'ml-2 inline-block'}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};
