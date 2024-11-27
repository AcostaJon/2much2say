// bootstrap js
import BootstrapClient from './components/BootstrapClient';
import "./globals.css";
// next script tag
import Script from 'next/script';

export const metadata = {
  title: " 2much2say - Podcast | Family | Lifestyle | Relations and more",
  description: "Podcast:Family|Lifestyle|Relations and more",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/1637efd201.js" crossOrigin="anonymous" />
      </head>
      <body>
        <BootstrapClient>
          {children}
        </BootstrapClient>
      </body>
    </html>
  );
}
