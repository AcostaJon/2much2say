// react
import { useEffect, useState } from 'react';
import Head from 'next/head';
// css
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
//*****/ components  ********
import Header from '@/components/header'
import Footer from '@/components/footer';
import getShowApi from './api/getShowApi';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page) // per page layout
  const [episodes, setEpisodes] = useState([]);
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [firstEpName, setFirstEpName] = useState("");
  const [firstEpSpotifyLink, setFirstEpSpotifyLink] = useState("");
  const [firstEpSrc, setFirstEpSrc] = useState("");

  useEffect(() => {
    // bootstrap js library
    import("bootstrap/dist/js/bootstrap");

    // invoke getShowApi - returns successful promise
    const apiPromise = getShowApi()

    // update state with data from data object
    apiPromise.then((data) => {
      //all episodes
      setEpisodes(data.data.episodes.items);
      // latest episodes
      setLatestEpisodes(data.data.episodes.items.slice(1, 4));
      // first episode name
      setFirstEpName(data.data.episodes.items[0].name);
      // first episode spotify link
      setFirstEpSpotifyLink(data.data.episodes.items[0].external_urls.spotify);
      // first episode source link
      setFirstEpSrc(data.data.episodes.items[0].audio_preview_url);
    }
    ).catch((err) => console.log(err))


  }, [])

  return getLayout(
    <>

      <Head>
        <meta name="description" content="Podcast:Family|Lifestyle|Relations and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* site tile */}
        <title>2much2say - Podcast | Family | Lifestyle | Relations and more</title>
        {/* site icon */}
        <link
          rel="icon"
          href="./logo.svg"
        />
      </Head>

      {/* Navbar and footer component is now displayed on all pages.*/}
      {/* props in Component are accessible to all pages */}
      <Header />
      <Component {...pageProps} episodes={episodes} latestEp={latestEpisodes} firstEpName={firstEpName} firstEpSpotifyLink={firstEpSpotifyLink} firstEpSrc={firstEpSrc} />
      <Footer latestEp={latestEpisodes} />

    </>
  )

}


