import { openai } from '@/utils/openai';
import { type NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const {
    phrase,
  }: {
    phrase: string;
  } = await request.json();

  const language = request.cookies.get('language')?.value;
  if (!language)
    return new Response('language is not selected', { status: 400 });

  const messages = [
    {
      role: 'system' as const,
      content: `You are to play the role of a dictionary on a website to teach students ${language}. Your task is to translate the given word into ${language}. Respond only with the translated text. Respond with all possible translations of the word (each on a new line), along with the form of speech, such as (n), (adj), etc.`,
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
