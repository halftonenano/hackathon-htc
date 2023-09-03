import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex gap-3">
        <div className="mt-1 h-fit rounded bg-primary p-2 text-white shadow-lg">
          <Loader2 size={24} className="animate-spin" />
        </div>
        <div className="mt-px">
          This is the first time generating this scenario in this language.
          <br />
          Please wait a moment...
        </div>
      </div>
    </div>
  );
}
