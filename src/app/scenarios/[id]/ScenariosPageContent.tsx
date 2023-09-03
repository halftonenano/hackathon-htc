'use client';

import AssistWidget from '@/components/chat/Assist';
import Message from '@/components/chat/Message';
import { scenarios } from '@/utils/scenarios';
import { useChat } from 'ai/react';
import { useEffect, useId } from 'react';

export default function ScenariosPageContent({
  scenario,
  startingMessage,
}: {
  scenario: (typeof scenarios)[number];
  startingMessage: string;
}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      { id: 'initial', content: startingMessage, role: 'assistant' },
    ],
    api: `/api/chat-completions/scenario?id=${scenario.id}`,
  });

  const elementid = useId();
  useEffect(() => {
    updateScroll(elementid);
  }, [messages]);

  return (
    <div className="relative h-screen pb-20">
      <div
        className="mx-auto grid h-full max-w-xl"
        style={{ gridTemplate: '1fr auto / 1fr' }}
      >
        <div
          className="no-scrollbar flex flex-col gap-3 overflow-y-auto py-10"
          id={elementid}
        >
          {messages.map((msg, index) => (
            <Message content={msg.content} role={msg.role} key={index} />
          ))}
        </div>
        <div className="relative -mt-5">
          <div className="h-15 pointer-events-none absolute -top-14 bottom-0 w-full bg-gradient-to-t from-white via-white to-transparent"></div>
          <div className="relative z-10 flex flex-col rounded-lg bg-primary shadow-lg">
            <div className="w-full">
              <AssistWidget messages={messages} scenario={scenario} />
            </div>
            <form
              className="flex h-12 w-full rounded-md border bg-white"
              onSubmit={handleSubmit}
            >
              <input
                className="w-full bg-transparent px-5 focus:outline-none"
                placeholder="Type your response..."
                value={input}
                onChange={handleInputChange}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function updateScroll(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollTop = element.scrollHeight;
}
