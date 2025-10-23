import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create new Note — NoteHub",
  description: "Create a new note in NoteHub.",
  openGraph: {
    title: "Create new Note — NoteHub",
    description: "Create a new note in NoteHub.",
    url: "https://08-zustand-nenn.vercel.app/notes/action/create",
    images: [
            {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Open Graph image",
      },
    ],
  type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: `New note`,
    description: 'Create a new note',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}