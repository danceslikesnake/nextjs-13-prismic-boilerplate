import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          as='font'
          crossOrigin='anonymous'
          href='/fonts/apercu-mono/Apercu-Mono.woff2'
          rel='preload'
          type='font/woff2'
        />
        <link
          as='font'
          crossOrigin='anonymous'
          href='/fonts/apercu-mono/Apercu-Mono.woff'
          rel='preload'
          type='font/woff'
        />
        <link
          as='font'
          crossOrigin='anonymous'
          href='/fonts/apercu-mono/Apercu-Mono.eot'
          rel='preload'
          type='font/eot'
        />
        <link
          as='font'
          crossOrigin='anonymous'
          href='/fonts/apercu-mono/Apercu-Mono.ttf'
          rel='preload'
          type='font/ttf'
        />
        <link
          as='font'
          crossOrigin='anonymous'
          href='/fonts/apercu-mono/Apercu-Mono.svg'
          rel='preload'
          type='image/svg+xml'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
