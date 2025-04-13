import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Category, CategoryWithImage } from '@/server/types';
import { Route } from '@/constants/interfaces';

type CategoryItemProps = {
    category: CategoryWithImage;
};
export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        <div className={'relative flex h-40 w-full flex-col items-center justify-center rounded-2xl bg-gray '}>
            <div className={'relative -top-[42px]'}>
                <div className={'flex h-32 items-start justify-center'}>
                    <div className={`relative justify-center`}>
                        <Image
                            src={category.categoryImage.url}
                            alt={category.name}
                            width={0}
                            height={0}
                            sizes='100vw'
                            quality='100'
                            style={{
                                width: `${category.categoryImage.width}px`,
                                // height: `${category.categoryImage.height}px`,
                            }}
                        />
                    </div>
                </div>

                <div className={'text-center'}>
                    <p className={'text-bold  text-h6 uppercase'}>{category.name}</p>
                    <Link
                        href={`/categories/${category.slug}`}
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
