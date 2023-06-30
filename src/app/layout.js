import Darko from './Darko';
import './globals.css';
import Footer from './Footer';

export const metadata = {
  metadataBase: new URL('https://raw.githubusercontent.com'),
  title: 'Blinds',
  description: 'The best dark mode package for all websites',
  keywords: ['dark', 'dark mode', 'night mode'],

  openGraph: {
    title: 'Blinds',
    description: 'The best dark mode package for all websites',
    url: 'https://blindjs.dev',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg',
        width: '1200',
        height: '630'
      }
    ],
  }
}

export default function RootLayout({ children }) {  

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="dark mode night mode" />
        {/* <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <link rel="manifest" href="/site.webmanifest.json" />
      </head>
      <body className="">
        {children}
        <Footer />
      </body>
      <Darko />
    </html>
  )
}
