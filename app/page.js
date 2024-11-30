'use client'
import { useEffect } from "react";
import Link from 'next/link';
// css
import styles from "./page.module.css";
//my components
import MediaPlayer from '@/app/components/mediaplayer/mediaPlayer';
import Subscribe from '@/app/components/subscribe'
import LatestEpisodes from '@/app/components/episode/latestEpisodes';
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home(props) {
  useEffect(() => {

    // get show
    fetch('/api/getShow')
      .then((data) => {
        return data.json()
      });

  })


  return (
    <>
     <Header />
      <main id='top'>
        {/*Introduction Section - real talk, over some chilled */}
        <div className="container" id='attentionGrabber'>
          <div className="row" >
            <div className='col d-flex flex-column justify-content-end align-items-center'>
              <h3>A PODCAST ABOUT SELF</h3>
              <h1 className='my-3'> IMPROVEMENT, BALANCE, AND CONFIDENCE</h1>
              <div className='attentionGrabberButtonConainer'>
                <Link href='/episodes'>
                  <button type='button' className='mb-3 mb-sm-0 me-sm-3' variant="outline-info" size="lg">All Episodes</button>
                </Link>
                <Link href='#latestEpisodes'>
                  <button type="button" variant="outline-info" size="lg">Listen Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* media player */}
        <p className='container my-3 text-center '><span className='text-info'>LATEST EPISODE:</span> </p>
        {/* <MediaPlayer spotify={props.firstEpSpotifyLink} src={props.firstEpSrc} /> */}

        {/* Latest Episodes Section */}
        {/* <LatestEpisodes episodes={props.latestEp} /> */}

        {/*About Us Section */}
        <div className='container-fluid my-5 py-5' >
          <div className="container">
            <div className="row">
              <div  className='col border border-info border-2 rounded-start-circle align-self-stretch' id='aboutUsSection' >
                {/* background image set */}
              </div>
              <div className="col" >
                <h3>Leslie & Lisi</h3>
                <h1 className='mt-5 mb-4'>We have Created This Podcast Based on Positivity, and Success for others.</h1>
                <p className='mb-5'>We are artists, writers, and podcast host's.</p>
                <Link href='/about'>
                  <button type="button" variant="info" size="lg">About Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section - We Love Your Reviews */}
        <div className='container-fluid py-5 my-5 bg-secondary  bg-opacity-10'>
          <div className='container pb-5'>
            <div className="row">
              <div className='col text-center my-5'>
                <h3>We Love Your Reviews</h3>
                <h1>Leave a Comment</h1>
              </div>
            </div>
            <div className="row" >
              <div className="col">
                {/* pwr comments plugin */}

              </div>
            </div>
          </div>
        </div>

        {/* Winedown Wednesday - Section*/}
        <div className='container py-5' >
          <div className="row d-flex flex-column-reverse flex-md-row p-2" >
            <div className='col pt-3' >
              <h1>Wine Down Wednesday's.</h1>
              <p className='w-75 my-3'>Every wednesday join our  <a href='https://www.instagram.com/p/CS8IA14L3DU/' id='wine_down_IGLink' target='_blank'>INSTAGRAM LIVE</a>  to be a part of our latest episode and to see whats to come.</p>
              <div className='row m-0 my-lg-4'>
                <div className="col">
                  <ul className='true-crime-list'>
                    <li>Latest Episode</li>
                    <li>Real-time Chat</li>
                  </ul>
                </div>
                <div className="col">
                  <ul className='true-crime-list'>
                    <li>Wine-Market Coming Soon</li>
                    <li>Merch Coming Soon</li>
                  </ul>
                </div>
              </div>
              <Link href='/about'>
                <button type='button' variant="info" size='lg'>More About Us</button>
              </Link>
            </div>
            <div className='col border border-info border-2 rounded-end-circle align-self-stretch ' id='wineDownWednesdayImg'>
              {/* background image set */}
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="container-fluid"  id='subscribeToShow'>
          <div className="container"   >
            <div className="row">
              <div className='col text-center'>
                <h3>Join the Team</h3>
                <h1>Subscribe to The Show</h1>
                <p className='w-50 mx-auto mb-4'>
                  Follow us here or on your favorite podcast app to get the scoop about relationships, family, lifestyle and so much more. </p>
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
