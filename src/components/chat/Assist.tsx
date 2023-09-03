import { scenarios } from '@/utils/scenarios';
import type { Message } from 'ai';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import useMeasure from 'react-use-measure';
import DictionaryWidget from './assist/Dictionary';
import HowToSayWidget from './assist/HowToSay';
import SummaryWidget from './assist/Summary';

export default function AssistWidget({
  messages,
  scenario,
}: {
  messages: Message[];
  scenario: (typeof scenarios)[number];
}) {
  const [ref, bounds] = useMeasure();
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [show, setShow] = useState(false);

  function AssistOptionButton({
    label,
    onClick,
  }: {
    label: string | React.ReactNode;
    onClick: () => void;
  }) {
    return (
      <button
        className="rounded bg-black/10 px-2.5 py-0.5 text-white transition hover:bg-white hover:text-primary"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <motion.div
      animate={{
        height: bounds.height,
        transition: {
          type: 'spring',
          bounce: 0,
          duration: 0.5,
        },
      }}
    >
      <div ref={ref}>
        <button
          className="w-full p-1 text-center text-sm font-bold text-white"
          onClick={() => {
            setOpened((prev) => !prev);
          }}
        >
          assist
        </button>
        {opened && (
          <div>
            <div className="flex justify-between gap-2 px-3 pb-1.5 text-sm font-medium">
              <div className="flex gap-2">
                <AssistOptionButton
                  label="what's happening?"
                  onClick={() => {
                    setSelected(0);
                  }}
                />
                {/* <AssistOptionButton
                  label="give me examples"
                  onClick={() => {
                    setSelected(1);
                  }}
                /> */}
                <AssistOptionButton
                  label="how do I say..."
                  onClick={() => {
                    setSelected(2);
                  }}
                />
                <AssistOptionButton
                  label="dictionary"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              </div>
              <AssistOptionButton
                label={<X size={18} />}
                onClick={() => {
                  setOpened(false);
                  setSelected(-1);
                }}
              />
            </div>
            <div>
              {selected === 0 && (
                <SummaryWidget messages={messages} scenario={scenario} />
              )}
              {selected === 2 && <HowToSayWidget />}
            </div>
            <DictionaryWidget show={show} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
