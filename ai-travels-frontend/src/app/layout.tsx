export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className={poppins.variable}>
        <body>
          <Provider>{children}</Provider>
        </body>
      </html>
    );
  }