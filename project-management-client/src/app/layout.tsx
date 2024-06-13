// - //app/layout.tsx
import "./layout.css"
import toast, { Toaster } from 'react-hot-toast';
export const metadata = {
  title: 'Project Management Dashboard',
  description: 'Project Management Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="resize">
        <Toaster position="bottom-left" />
        {children}
      </body>
    </html>
  )
} 
