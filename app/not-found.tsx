import css from './Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',

  openGraph: {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    url: 'https://08-zustand-nenn.vercel.app/not-found',
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
   type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Page Not Found`,
    description: 'The page you are looking for does not exist.',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};


export default function NotFound() {
  return (
   <div className={css.container}>
       <h1 className={css.title}>404 - Page not found</h1>
       <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
   </div>

  );
}