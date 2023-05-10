import Header from '@/components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='bg-bg-color'>
        <Header />
        
        {children}
      </body>
    </html>
  )
  }