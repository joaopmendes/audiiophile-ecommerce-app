import styles from './page.module.css';
import { cn } from '@/lib/utils';
import { Hero } from './components/hero';
import { CategoriesNavbar } from '@/components/layout/navbar/categories';
import { FeaturedProducts } from '@/features/home-page/components/featured-products/featured-products';
import { FooterBanner } from '@/components/layout/footer-banner';

export default function Home() {
    return (
        <>
            <section className={cn(styles.hero, 'h-full w-full')}>
                <Hero />
            </section>
            <section className={'container mx-auto my-40'}>
                <CategoriesNavbar />
            </section>
            <section className={'container mx-auto mb-20'}>
                <FeaturedProducts />
            </section>

            <FooterBanner />
        </>
    );
}
