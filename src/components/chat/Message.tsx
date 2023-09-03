import { tw } from '@/utils/tailwind';
import { useChat } from 'ai/react';
import { Languages, Loader2, X } from 'lucide-react';
import { useState } from 'react';

let clearSelectionPointTimeout: NodeJS.Timeout;

export default function Message({
  content,
  role,
}: {
  content: string;
  role: 'assistant' | 'user' | 'system' | 'function';
}) {
  const { messages, append, isLoading } = useChat({
    api: '/api/chat-completions/translate',
  });

  const [selectioned, setSelectioned] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const [translated, setTranslated] = useState(':loading:');

  function handleSelection() {
    if (role !== 'assistant') return;

    const selection = window.getSelection();

    if (!selection || selection.type !== 'Range') {
      setShowPopup(false);
      clearSelectionPointTimeout = setTimeout(() => {
        setSelectioned(null);
        setTranslated('');
      }, 300);
      return;
    }

    try {
      clearTimeout(clearSelectionPointTimeout);
    } catch {}

    const boundingBox = selection.getRangeAt(0).getBoundingClientRect();

    setSelectioned({ x: boundingBox.left, y: boundingBox.top });
    setTranslated('');
    setShowPopup(true);
  }

  async function translateSelection() {
    const selection = window.getSelection();
    if (!selection) return setShowPopup(false);

    const selectedText = selection.toString();

    if (selectedText === '') return setShowPopup(false);

    const { phrase } = await (
      await fetch('/api/dictionary/from', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ phrase: selectedText }),
      })
    ).json();

    setTranslated(phrase);
  }

  return (
    <div
      className={tw(
        'px-4 py-3',
        role === 'user'
          ? 'ml-auto w-fit max-w-[calc(100%_-_5rem)] rounded-lg rounded-br-none bg-primary text-white shadow-md'
          : 'group relative rounded-lg pr-16 transition hover:bg-neutral-200',
      )}
    >
      <div
        className={tw(
          'fixed flex max-w-md -translate-y-[calc(100%_+_0.25rem)] items-center gap-3 rounded bg-primary px-3 py-1.5 text-sm text-white opacity-0 shadow-lg transition',
          showPopup && 'opacity-100',
          translated === '' && 'hover:brightness-90',
        )}
        style={{ left: selectioned?.x, top: selectioned?.y }}
      >
        {translated === '' ? (
          <button
            className="font-bold"
            onClick={() => {
              translateSelection();
              setTranslated(':loading:');
            }}
          >
            translate?
          </button>
        ) : translated === ':loading:' ? (
          <div className="grid w-16 place-items-center py-0.5">
            <Loader2 size={16} className="animate-spin" />
          </div>
        ) : (
          translated
        )}
        <button
          onClick={() => {
            setShowPopup(false);
          }}
        >
          <X size={16} />
        </button>
      </div>

      <div onMouseUp={handleSelection} onDoubleClick={handleSelection}>
        {content}
      </div>
      {!messages[1] && (
        <button
          className="absolute right-3 top-3 opacity-0 transition group-hover:opacity-100"
          disabled={isLoading}
          onClick={() => {
            append({ role: 'user', content });
          }}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <Languages />}
        </button>
      )}
      <div className="font-semibold text-primary">{messages[1]?.content}</div>
    </div>
  );
}
