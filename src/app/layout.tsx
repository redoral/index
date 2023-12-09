import type { Metadata } from 'next';
import { Hedvig_Letters_Serif } from 'next/font/google';
import './globals.css';

const inter = Hedvig_Letters_Serif({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Red Oral',
  description: 'I am a full stack software engineer and this is my personal website.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gradient-to-b from-yellow-50 to-neutral-50`}>
        {children}
      </body>
    </html>
  );
}
