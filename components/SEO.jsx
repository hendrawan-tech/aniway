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
      <meta property='og:image' content='\Images\metatag.jpg' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://aniway.vercel.app/' />
      <meta property='twitter:title' content='Aniway | Watch anime online' />
      <meta
        property='twitter:description'
        content='Aniway is anime streaming website, so you can watch or download anime here'
      />
      <meta property='twitter:image' content='\Images\metatag.jpg' />
    </Head>
  );
};

export default SEO;
