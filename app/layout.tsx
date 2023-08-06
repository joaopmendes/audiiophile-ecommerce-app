import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const inter = Manrope({ subsets: ['latin'], weight: ['700', '500', '400'] });

export const metadata: Metadata = {
    title: 'Audiophile Store',
    description: 'A online store for audio related products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
