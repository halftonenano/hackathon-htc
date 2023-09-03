'use client';

import ScenarioCard from '@/components/home/ScenarioCard';
import SlidingText from '@/components/home/SlidingText';
import { languages as items } from '@/utils/languages';
import { scenarios } from '@/utils/scenarios';
import { tw } from '@/utils/tailwind';
import Downshift from 'downshift';
import { AnimatePresence, motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { ArrowRight, Globe2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function Home() {
  const [language, setLanguage] = useState('spanish');

  const [tag, setTag] = useState('all');

  useEffect(() => {
    Cookies.set(
      'language',
      language.charAt(0).toUpperCase() + String(language).slice(1),
    );
  }, [language]);

  return (
    <main className="flex h-screen w-screen items-end overflow-hidden">
      <SlidingText />
      <div className="fixed right-6 top-6">
        <Downshift
          initialSelectedItem={{ value: Cookies.get('language') || '' }}
          onChange={(selection) => {
            if (selection) setLanguage(selection.value);
          }}
          itemToString={(item) => (item ? item.value : '')}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            getToggleButtonProps,
            inputValue,
            isOpen,
          }) => (
            <div>
              <div className="flex h-9 gap-2">
                <div className="grid aspect-square h-full place-items-center rounded-md border backdrop-blur-md">
                  <Globe2 size={20} />
                </div>
                <div {...getToggleButtonProps()}>
                  <div className="flex h-full items-center gap-3 rounded-md border backdrop-blur-md">
                    <input
                      className="h-full bg-transparent px-3 focus:outline-none"
                      placeholder="Select a language"
                      {...getInputProps()}
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <ul
                  {...getMenuProps()}
                  className="relative z-20 mt-1 max-h-44 overflow-hidden overflow-y-auto rounded-md border shadow-md backdrop-blur-md"
                >
                  {items
                    .filter(
                      (item) =>
                        !inputValue ||
                        item.value
                          .toLowerCase()
                          .includes(inputValue.toLowerCase()),
                    )
                    .map((item, index) => (
                      <li
                        className="z-20 cursor-pointer px-4 py-1.5 transition-all hover:bg-neutral-200"
                        {...getItemProps({
                          key: `${item.value}${index}`,
                          item,
                          index,
                        })}
                      >
                        {item.value}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          )}
        </Downshift>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 p-10 pb-0">
          <div className="-mb-3 text-7xl font-bold">realingo</div>

          <div className="flex items-end justify-between">
            <div className="flex w-fit gap-2 rounded-lg border p-2 font-bold text-white shadow-md">
              <div
                onClick={() => {
                  setTag((prev) => (prev === 'easy' ? 'all' : 'easy'));
                }}
                className={tw(
                  'grid w-32 cursor-pointer place-items-center rounded-md bg-emerald-500 py-1 transition-[transform,background] duration-500 ease-in-out',
                  tag === 'easy' && 'z-10 scale-95 bg-emerald-700',
                )}
              >
                easy
              </div>
              <div
                onClick={() => {
                  setTag((prev) => (prev === 'medium' ? 'all' : 'medium'));
                }}
                className={tw(
                  'grid w-32 cursor-pointer place-items-center rounded-md bg-amber-500 py-1 transition-[transform,background] duration-500 ease-in-out',
                  tag === 'medium' && 'z-10 scale-95 bg-amber-700',
                )}
              >
                medium
              </div>
              <div
                onClick={() => {
                  setTag((prev) => (prev === 'hard' ? 'all' : 'hard'));
                }}
                className={tw(
                  'grid w-32 cursor-pointer place-items-center rounded-md bg-red-500 py-1 transition-[transform,background] duration-500 ease-in-out',
                  tag === 'hard' && 'scale-95 bg-red-700',
                )}
              >
                hard
              </div>
              <div
                onClick={() => {
                  setTag((prev) => (prev === 'funny' ? 'all' : 'funny'));
                }}
                className={tw(
                  'grid w-32 cursor-pointer place-items-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 transition-[transform,background] duration-500 ease-in-out',
                  tag === 'funny' && 'scale-95 from-violet-700 to-fuchsia-700',
                )}
              >
                funny
              </div>
            </div>
            <div className="pointer-events-none flex items-center gap-3 font-bold">
              <div>Drag to Scroll</div>
              <ArrowRight className="mb-0.5" />
            </div>
          </div>
        </div>

        <ScrollContainer
          hideScrollbars
          className="flex w-screen p-8 pr-52 pt-0"
        >
          <AnimatePresence>
            {scenarios
              .filter((item) => tag === 'all' || item.tag === tag)
              .map((scenario, index) => (
                <motion.div
                  className="shrink-0 overflow-hidden"
                  key={scenario.id}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: 'auto',
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 0.7,
                    },
                  }}
                  exit={{ width: 0, opacity: 0 }}
                >
                  <div className="px-3">
                    <ScenarioCard
                      id={scenario.id}
                      title={scenario.name}
                      objective={scenario.objective}
                      description={scenario.description}
                      tag={scenario.tag}
                      from={scenario.color_from}
                      to={scenario.color_to}
                    />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
          <div className="w-80 shrink-0"></div>
        </ScrollContainer>
      </div>
      8{' '}
    </main>
  );
}
