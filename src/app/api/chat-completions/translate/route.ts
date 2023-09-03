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

  messages.unshift({
    role: 'system',
    content:
      "You are to translate the user's message into english. Only respond with the translated content",
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
