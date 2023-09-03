import { Home } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="h-full w-full">
      <section className="ml-auto h-full border-r p-10">
        <h2 className="text-3xl font-bold text-primary ml-2 pb-1">realingo</h2>

        <Link href="/">
          <div className="flex items-center gap-3 rounded px-4 py-1.5 pl-2 transition hover:bg-neutral-200">
            <Home size={20} /> Home
          </div>
        </Link>
      </section>
    </div>
  );
}
