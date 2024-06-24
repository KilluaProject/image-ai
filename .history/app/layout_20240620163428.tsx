import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight:['400', '500', '600', '700'],
   variable:'--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "image ai maker",
  description: "Make A Image just a one click",
};

export default function RootLayout({children,}: Readonly<{hildren: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
