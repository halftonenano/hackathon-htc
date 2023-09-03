import { openai } from '@/utils/openai';
import { OpenAIStream, StreamingTextResponse, type Message } from 'ai';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const {
    messages,
  }: {
    messages: Omit<Message, 'id'>[];
  } = await request.json();

  const language = request.cookies.get('language')?.value;
  if (!language)
    return new Response('language is not selected', { status: 400 });

  messages[0] = {
    role: 'user',
    content: `How do I say "${messages[0].content}" in ${language}?`,
  };

  messages.unshift({
    role: 'system',
    content: `Walk the user through how to say the following sentence in ${language}. Do not out right tell them the answer but instead go step by step showing them the words they may need. DO NOT TELL THEM THE FULL SENTENCE!`,
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    max_tokens: 500,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
