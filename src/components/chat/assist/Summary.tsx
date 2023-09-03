import { scenarios } from '@/utils/scenarios';
import { Message, useChat } from 'ai/react';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

export default function SummaryWidget({
  messages,
  scenario,
}: {
  messages: Message[];
  scenario: (typeof scenarios)[number];
}) {
  const { messages: summary, append } = useChat({
    initialMessages: messages,
    api: `/api/chat-completions/summarize?id=${scenario.id}`,
  });

  useEffect(() => {
    if (messages.length === 0) return;
    append({ role: 'assistant', content: '[Current Situation]' });
  }, []);

  return (
    <div className="p-3 pt-1">
      <div className="max-h-[calc(60vh_-_5rem)] gap-3 overflow-hidden overflow-y-auto whitespace-pre-wrap rounded bg-white/20 text-white scrollbar-thin scrollbar-track-[#e34e4e] scrollbar-thumb-white">
        <div className="px-4 py-2.5 text-white">
          {summary[summary.length - 1]?.content === '[Current Situation]' ? (
            <div className="flex items-center justify-center gap-3">
              <Loader2 size={20} className="animate-spin" />
              loading...
            </div>
          ) : (
            summary[summary.length - 1]?.content
          )}
        </div>
      </div>
    </div>
  );
}
