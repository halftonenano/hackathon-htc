import { tw } from '@/utils/tailwind';
import { useChat } from 'ai/react';
import { useEffect, useId } from 'react';
import Cookies from 'js-cookie';

export default function HowToSayWidget() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: '/api/chat-completions/how-do-i-say',
    });

  const elementid = useId();
  useEffect(() => {
    updateScroll(elementid);
  }, [messages]);

  return (
    <div className="p-3 pt-0">
      {messages.length !== 0 ? (
        <div
          id={elementid}
          className="flex max-h-[calc(60vh_-_5rem)] flex-col gap-3 overflow-y-auto whitespace-pre-wrap rounded py-5 pr-3 text-white scrollbar-thin scrollbar-track-[#e34e4e] scrollbar-thumb-white"
        >
          {messages.map((msg, index) => (
            <div>
              <div
                className={tw(
                  '',
                  index === 0 && 'font-bold italic',
                  msg.role === 'user'
                    ? 'rounded-md bg-white px-4 py-2 text-primary'
                    : 'ml-3 border-l border-white/50 pl-5 ',
                )}
                key={index}
              >
                {index === 0 && (
                  <>
                    <span className="font-normal">How do i say</span> "
                  </>
                )}
                {msg.content}
                {index === 0 && (
                  <>
                    "{' '}
                    <span className="font-normal">
                      in {Cookies.get('language')}?
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-1 px-0.5 font-bold italic text-white">
          How do i say...
        </div>
      )}
      <div className="flex items-center gap-1 whitespace-nowrap">
        {!isLoading && (
          <form
            className="flex w-full rounded-md bg-white/20 text-white"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full bg-transparent px-4 py-1.5 text-sm placeholder:text-white/50 focus:outline-none"
              placeholder={
                messages.length === 0
                  ? 'Type what you want to say...'
                  : 'Ask a follow up question'
              }
              value={input}
              onChange={handleInputChange}
            />
          </form>
        )}
        {messages.length === 0 && (
          <div className="px-1 text-sm font-bold italic text-white">
            in {Cookies.get('language')}?
          </div>
        )}
      </div>
    </div>
  );
}

function updateScroll(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollTop = element.scrollHeight;
}
