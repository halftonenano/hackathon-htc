import { openai } from '@/utils/openai';
import { scenarios } from '@/utils/scenarios';
import { OpenAIStream, StreamingTextResponse, type Message } from 'ai';
import type { NextRequest } from 'next/server';
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const {
    messages: chatMessages,
  }: {
    messages: Omit<Message, 'id'>[];
  } = await request.json();
  const scenario_id = request.nextUrl.searchParams.get('id');

  if (!chatMessages || !scenario_id)
    return new Response('invalid request format', { status: 400 });

  const language = request.cookies.get('language')?.value;
  if (!language)
    return new Response('language is not selected', { status: 400 });

  const scenario = scenarios.find((item) => item.id === scenario_id);
  if (!scenario)
    return new Response('scenario with id does not exist', { status: 404 });

  const messages: Omit<Message, 'id'>[] = [
    {
      role: 'system',
      content:
        'You are part of a language learning app to help the user with a language they are unfamiliar with. Refer to the user in the second person. The assistant is the User',
    },
    {
      role: 'user',
      content: `Tell me what is happening in this conversation in english. (Try to minimize the number of sentences) Please refer to me as \'you\' when describing it to me.\n---\n\n${chatMessages
        .filter((msg) => msg.content !== '[Current Situation]')
        .map(
          (msg) =>
            `${msg.role === 'user' ? '[Me:]' : `[${scenario.character}:]`} ${
              msg.content
            }`,
        )
        .join('\n')}`,
    },
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    max_tokens: 200,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
