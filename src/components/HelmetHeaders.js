import React from 'react';
import { Helmet } from 'react-helmet';

export default function HelmetHeaders() {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>Kyle Butler</title>
      <link rel='canonical' href='https://kylbutlr.com' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#dcbeb3' />
      <meta name='msapplication-TileColor' content='#dcbeb3' />
      <meta name='theme-color' content='#dcbeb3' />
      <meta name="Description" content="Kyle Butler's Portfolio Website" />
    </Helmet>
  );
}
