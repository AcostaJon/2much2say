//*************** Html document ****************
// react/next components
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* font awesome cdn */}
        <script src="https://kit.fontawesome.com/1637efd201.js" crossOrigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
