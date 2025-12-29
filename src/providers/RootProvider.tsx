"use client";
import ThemeProvider from "./theme-provider/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <Toaster />
    </>
  );
}
