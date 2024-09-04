import type { Metadata } from "next";
import { cn } from '@/shared/ui/utils';

import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/widgets/app-header/app-header";
import { ThemeProvider } from "@/features/theme/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}
    >
    <ThemeProvider>
      <AppHeader />
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
