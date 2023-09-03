import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="grid min-h-screen"
      style={{ gridTemplate: '1fr / 1fr auto 1fr' }}
    >
      <div className="h-full w-full"></div>
      <div
        className="grid min-h-screen gap-16"
        style={{ gridTemplate: '1fr / 1fr 2fr 1fr', gridArea: '1 / 2 / 1 / 3' }}
      >
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
