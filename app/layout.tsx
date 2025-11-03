import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/component/ThemeProvider";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaitanya Pawar",
  description: "Chaitanya Pawar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${funnelSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
