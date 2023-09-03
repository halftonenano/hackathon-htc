import { openai } from '@/utils/openai';
import { type NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const {
    phrase,
  }: {
    phrase: string;
  } = await request.json();

  const messages = [
    {
      role: 'system' as const,
      content:
        "You are to translate the user's message into English. Only respond with the translated content",
    },
    {
      role: 'user' as const,
      content: phrase,
    },
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    max_tokens: 100,
  });

  return NextResponse.json({ phrase: response.choices[0].message.content });
}
