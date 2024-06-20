import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from './ReduxProvider';
import React from 'react';
import { Header } from '@Components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BandaNews',
    description: 'Супер опис для супер сайту',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Header />
                    <main
                        className="flex flex-col items-center justify-between mx-auto max-w-7xl p-6 lg:px-8"
                        style={{ minHeight: 'calc(100vh - 88px)' }}
                    >
                        {children}
                    </main>
                </ReduxProvider>
            </body>
        </html>
    );
}
