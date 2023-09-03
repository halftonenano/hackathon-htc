import { tw } from '@/utils/tailwind';
import { Message, useChat } from 'ai/react';
import { Send, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DictionaryWidget({ show }: { show: boolean }) {
  const [display, setDisplay] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState(
    'Your translation will show up here!',
  );

  useEffect(() => {
    if (firstRun === false) {
      setTimeout(() => {
        setDisplay(!display);
      }, 50);
    } else {
      setFirstRun(false);
    }
  }, [show]);

  async function translateDictionary(text: string) {
    const { phrase } = await (
      await fetch('/api/dictionary/to', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ phrase: text }),
      })
    ).json();

    setTranslated(phrase);
  }

  return (
    <div>
      <div
        className={tw(
          'fixed -right-72 top-[50%] flex h-[30rem] w-72 -translate-y-[50%] flex-col gap-6 rounded-l-lg bg-[#fd5757] p-4 transition-all duration-500',
          display && 'right-0',
        )}
      >
        <div className="flex justify-between">
          <div className="text-4xl font-bold text-white">Dictionary</div>
          <div
            onClick={() => {
              setDisplay(false);
            }}
            className="my-auto cursor-pointer rounded-md bg-[#e34e4e] p-2 text-4xl text-white"
          >
            <X />
          </div>
        </div>

        <form
          className="flex h-12 w-64 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            translateDictionary(text);
          }}
        >
          <input
            className="w-44 rounded-md bg-transparent bg-white px-5 focus:outline-none"
            placeholder="Type a word:"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="text-white" type="submit">
            <Send />
          </button>
        </form>

        <div className="text-4xl font-bold text-white">Translation:</div>
        <div className="text-white">{translated}</div>
      </div>
    </div>
  );
}
