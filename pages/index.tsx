import Head from "next/head";
import { Home } from "@/components/home/Home";
import { JSXElementConstructor, ReactElement } from "react";

export default function home(): ReactElement<JSXElementConstructor<HTMLElement>> {
  return (
    <>
      <Head>
        <title>Gabriel Copa | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Gabriel Copa | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gabriel Copa | Frontend Developer" />
        <meta name="description" content="Hey! I'm Gabriel Copa, a Full Stack web developer with over 1 year of experience. Currently." />

        <meta property="og:title" content="Gabriel Copa | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://gabrielcopa.app.vercel/" />
        <meta property="og:description" content="Hey! I'm Gabriel Copa, a Full Stack web developer with over 1 year of experience. Currently." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Gabriel Copa | Frontend Developer"/>
        <meta name="twitter:description" content="Hey! I'm Gabriel Copa, a Full Stack web developer with over 1 year of experience. Currently."/>
      </Head>
      <Home />
    </>
  );
}
