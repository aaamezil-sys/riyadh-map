export const metadata = {
  title: 'Riyadh Intelligence',
  description: 'Spatial Logistics Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body 
        suppressHydrationWarning={true}
        style={{ margin: 0, backgroundColor: 'black', color: 'white' }}
      >
        {children}
      </body>
    </html>
  );
}