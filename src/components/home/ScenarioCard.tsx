'use client';

import { tw } from '@/utils/tailwind';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export default function ScenarioCard({
  from,
  to,
  title,
  objective,
  description,
  id,
  tag,
}: {
  from: string;
  to: string;
  title: string;
  objective: string;
  description: string;
  id: string;
  tag: string;
}) {
  return (
    <Link
      href={`/scenarios/${id}`}
      className={`group relative flex h-80 w-96 shrink-0 flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-br from-transparent p-6 shadow-xl`}
      style={{ '--tw-gradient-from': from, '--tw-gradient-to': to } as any}
    >
      <div
        className={tw(
          'absolute right-0 top-0 flex items-center rounded-bl-md rounded-tr-lg border bg-white p-2 shadow-md',
        )}
      >
        <div
          className={tw(
            'h-3 w-3 rounded-full',
            tag === 'easy' && 'bg-emerald-400',
            tag === 'medium' && 'bg-amber-400',
            tag === 'hard' && 'bg-red-400',
            tag === 'funny' && 'bg-purple-400',
          )}
        ></div>
        <div className="-my-1 pl-2.5 pr-2 text-sm">{tag}</div>
      </div>
      <Balancer className="text-4xl font-bold">{title}</Balancer>
      <div>{objective}</div>
      <div className="flex flex-[0] flex-col justify-start overflow-hidden rounded bg-white/50 text-sm shadow-lg transition-all duration-500 ease-in-out group-hover:mt-4 group-hover:flex-1">
        <div className="px-4 py-2.5">{description}</div>
      </div>
    </Link>
  );
}
