// src/app/login/layout.ts - layout

import type { Metadata } from "next";


export const metadata: Metadata = {
     title: "Sign-In Page",
     description: "Authentication / Sign-In Page",
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>
}

export default RootLayout;