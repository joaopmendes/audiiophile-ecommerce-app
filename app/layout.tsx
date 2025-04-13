import './global.scss';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { MainContainer } from '@/components/layout/main-container';
import { AppWrapper } from '@/components/layout/app-wrapper';
import { Footer } from '@/components/layout/footer';
import { Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { Providers } from './providers';
import NavbarServer from '@/components/layout/navbar/navbar-server';

const inter = Manrope({ subsets: ['latin'], weight: ['700', '500', '400'] });

export const metadata: Metadata = {
    title: 'Audiophile Store',
    description: 'A online store for audio related products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Providers>
                <body className={inter.className}>
                    <AppWrapper>
                        <NavbarServer />
                        <MainContainer>
                            <Suspense fallback={<Spinner />}>{children}</Suspense>
                        </MainContainer>
                        <Footer />
                    </AppWrapper>
                </body>
            </Providers>
        </html>
    );
}
