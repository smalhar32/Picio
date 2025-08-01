import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import FloatingShapes from "@/components/floating-shapes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Picio",
  description: "Photo Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* </header> */}
          <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
            <FloatingShapes />
            <Toaster richColors />
          {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
