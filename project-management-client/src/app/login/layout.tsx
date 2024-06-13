// src/app/login/layout.ts - layout

import type { Metadata } from "next";


export const metadata: Metadata = {
     title: "Login Page",
     description: "Authentication / Login Page",
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>
}

export default RootLayout;