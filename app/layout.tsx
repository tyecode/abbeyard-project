import './globals.css';

export const metadata = {
  title: 'Abbeyard',
  description: 'The fastest and easiest way to manage your ledger',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='light' suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
