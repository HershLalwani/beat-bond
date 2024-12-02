import type { Metadata } from "next";
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./convexClientProvider";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body className="bg-black">
          <SidebarProvider>
            <AppSidebar />
            <main className="h-screen w-screen">
              <ConvexClientProvider>
              {children}
              </ConvexClientProvider>
            </main>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
