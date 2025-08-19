import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GiftGenix - Perfect Gift Suggestions',
  description: 'Find personalized gift ideas with ease.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}