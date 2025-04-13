import './global.scss';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Navbar } from '@/components/layout/navbar/navbar';
import { MainContainer } from '@/components/layout/main-container';
import { AppWrapper } from '@/components/layout/app-wrapper';
import { Footer } from '@/components/layout/footer';
import QueryProvider from '@/providers/query-provider';
import { Suspense } from 'react';

const inter = Manrope({ subsets: ['latin'], weight: ['700', '500', '400'] });

export const metadata: Metadata = {
    title: 'Audiophile Store',
    description: 'A online store for audio related products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <ClerkProvider>
                <QueryProvider>
                    <body className={inter.className}>
                        <AppWrapper>
                            <Navbar />
                            <MainContainer>
                                <Suspense
                                    fallback={
                                        <div className='flex h-full w-full items-center justify-center'>Loading...</div>
                                    }
                                >
                                    {children}
                                </Suspense>
                            </MainContainer>
                            <Footer />
                        </AppWrapper>
                    </body>
                </QueryProvider>
            </ClerkProvider>
        </html>
    );
}
