import { scenarios } from '@/utils/scenarios';
import { redis } from '@/utils/upstash';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import ScenariosPageContent from './ScenariosPageContent';
import { openai } from '@/utils/openai';
import Image from 'next/image';
import GradientShape from './side-gradient.png';
import { Crosshair, User2 } from 'lucide-react';

// export const runtime = 'edge';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const scenario = scenarios.find((item) => item.id === id);
  if (!scenario) return notFound();

  const language = cookies().get('language')?.value;

  if (!language)
    return (
      <div className="grid min-h-screen place-items-center">
        you need to select your language on
        <br />
        the home page before viewing this page
      </div>
    );

  const cachedid = `starting-msg/${id}/${language.toLowerCase()}`;
  let startingMessage = await redis.get(cachedid);

  if (typeof startingMessage !== 'string') {
    const messages = [
      {
        role: 'system' as const,
        content: `You are to translate the user's message into ${language}. Respond with ONLY the translated content. No "translated" or "translation" at the begining or end`,
      },
      {
        role: 'user' as const,
        content: scenario.starting_message,
      },
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 500,
    });

    startingMessage = response.choices[0].message.content;

    await redis.set(cachedid, startingMessage);
  }

  if (typeof startingMessage !== 'string')
    return (
      <div className="grid min-h-screen place-items-center">
        something went horribly wrong
      </div>
    );

  return (
    <>
      <ScenariosPageContent
        scenario={scenario}
        startingMessage={startingMessage}
      />
      <div className="h-full w-full p-5 pl-0">
        <div className="relative h-full w-full rounded-lg border p-5 shadow-inner">
          <h3 className="font-mono text-sm text-neutral-500">
            scenario: {scenario.id}
          </h3>
          <h1 className="text-2xl font-bold">{scenario.name}</h1>
          <hr className="mb-5 mt-3" />
          <div className="flex flex-col gap-3 italic text-neutral-500">
            <div className="flex gap-2">
              <Crosshair size={20} className="mt-px flex-shrink-0" />
              <p>{scenario.objective}</p>
            </div>
            <div className="flex items-center gap-2">
              <User2 size={20} className="flex-shrink-0" />
              <p>{scenario.character}</p>
            </div>
          </div>
          <Image
            className="absolute -right-[0vw] bottom-10"
            src={GradientShape}
            alt="gradient shape"
          />
        </div>
      </div>
    </>
  );
}
