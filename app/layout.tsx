import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Script from 'next/script';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rimba',
  description: 'Compliance and Audit AI for industrial operations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}