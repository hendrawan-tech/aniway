import React from "react";
import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <title>Aniway | Watch anime online</title>
      <meta name='title' content='Aniway | Watch anime online' />
      <meta
        name='description'
        content='Aniway is anime streaming website, so you can watch or download anime here'
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://aniway.vercel.app/' />
      <meta property='og:title' content='Aniway | Watch anime online' />
      <meta
        property='og:description'
        content='Aniway is anime streaming website, so you can watch or download anime here'
      />
      <meta property='og:image' content='\Images\metatag.png' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://aniway.vercel.app/' />
      <meta property='twitter:title' content='Aniway | Watch anime online' />
      <meta
        property='twitter:description'
        content='Aniway is anime streaming website, so you can watch or download anime here'
      />
      <meta property='twitter:image' content='\Images\metatag.png' />
      <link rel='apple-touch-icon' sizes='57x57' href='\Icon\apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='\Icon\apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='\Icon\apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='\Icon\apple-icon-76x76.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='\Icon\apple-icon-114x114.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='\Icon\apple-icon-120x120.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='\Icon\apple-icon-144x144.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='\Icon\apple-icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='\Icon\apple-icon-180x180.png' />
      <link rel='icon' type='image/png' sizes='192x192' href='\Icon\android-icon-192x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='\Icon\favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='\Icon\favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='\Icon\favicon-16x16.png' />
      <link rel='manifest' href='\Icon\manifest.json' />
      <meta name='msapplication-TileColor' content='#192026' />
      <meta name='msapplication-TileImage' content='\Icon\ms-icon-144x144.png' />
      <meta name='theme-color' content='#192026' />
    </Head>
  );
};

export default SEO;
