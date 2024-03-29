import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import StepContextProvider from "@/context/StepContextProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi Step Form",
  description:
    "Multi Step Form, a Frontendmentor Challenge coded by Shamim Ahsan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(inter.className, "bg-[#EFF5FF] ")}
      >
        <StepContextProvider>{children}</StepContextProvider>
      </body>
    </html>
  );
}
