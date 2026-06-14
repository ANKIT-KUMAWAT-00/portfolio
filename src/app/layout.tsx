import '../styles/globals.css';
import { Inter, Orbitron } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '600', '700', '900'], variable: '--font-orbitron' });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en'><body className={`${inter.variable} ${orbitron.variable} font-sans`}>{children}</body></html>);
}

export const metadata = {
  title: 'Ankit Kumawat | Full Stack AI Engineer',
  description: 'Personal 3D Portfolio showcasing AI Engineering, Full Stack SaaS, and System Architecture.',
};
