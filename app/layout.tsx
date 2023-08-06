import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Navbar } from '@/components/layout/navbar/navbar';
import { MainContainer } from '@/components/layout/main-container';
import { AppWrapper } from '@/components/layout/app-wrapper';

const inter = Manrope({ subsets: ['latin'], weight: ['700', '500', '400'] });

export const metadata: Metadata = {
    title: 'Audiophile Store',
    description: 'A online store for audio related products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <ClerkProvider>
                <body className={inter.className}>
                    <AppWrapper>
                        <Navbar />
                        <MainContainer>{children}</MainContainer>
                    </AppWrapper>
                </body>
            </ClerkProvider>
        </html>
    );
}
