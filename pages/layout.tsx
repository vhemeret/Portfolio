import { ReactNode } from "react"
import { ThemeProvider } from "../components/theme-providers"
import { Analytics } from '@vercel/analytics/react';


interface RootLayoutProps {
	children: ReactNode
  }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
		  <Analytics />
        </body>
      </html>
    </>
  )
}
