'use client'
import { useEffect, useState } from "react";
import React from "react";
import Subscribe from '@/app/components/subscribe'
// my components
import Header from "./components/header";
import Footer from "./components/footer";
import LatestEpisodes from '@/app/components/episode/latestEpisodes';
import { AppContext } from "./components/context/context";
// images
import SpotifyPodcast from "./components/images/spotifyPodcast";
// image component
import Logo from '@/app/components/images/logo';

export default function Home() {
  const [latestEpisode, setLatestEpisode] = useState([]);
  const [firstThree, setFirstThree] = useState([]);

  useEffect(() => {

    // get latest episode
    fetch('/api/getShow')
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        setLatestEpisode(data.episodes.items[0])
      })

    // get first 3 episodes
    fetch('/api/getShow')
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        const first = data.episodes.items[1]
        const second = data.episodes.items[2]
        const third = data.episodes.items[3]

        setFirstThree([first, second, third])
      })

  }, [])

  return (
    <>
      <AppContext.Provider value={{ firstThree }}>
        <Header />
        <main id='top'>

          {/*Introduction Section - real talk, over some chilled */}
          <div className="container " id='attentionGrabber'>
            <div className="row" >
              <div className='col d-flex flex-column justify-content-end align-items-center'>
                <h3>A PODCAST ABOUT SELF</h3>
                <h1 className='my-3'> IMPROVEMENT, BALANCE, AND CONFIDENCE</h1>
                <div className='attentionGrabberButtonConainer'>
                  <a href='/episodes' className='btn btn-info me-3'>All Episodes</a>
                  <a href='#latestEpisodes' className='btn btn-info '>Listen Now</a>
                </div>
              </div>
            </div>
          </div>

          {/*Latest Episode */}
          <div className="text-center bg-info bg-opacity-10 py-5">
            <div >
              <h1 className='container mt-2 text-center'>Latest Episode:</h1>
              <h3 className='text-info mb-3 fw-light'> {latestEpisode.name}</h3>
            </div>
            <audio className="w-75" controls controlsList={"nodownload"} src={latestEpisode.audio_preview_url} />
            <div className='d-flex justify-content-center mt-2' >
              <a href={'https://open.spotify.com/episode/' + latestEpisode.id} target="_blank" title='listen to full episode on spotify' className='me-2'>
                Full Episode
              </a>
              <SpotifyPodcast />
            </div>
          </div>

          {/* Latest Episodes Section */}
          <LatestEpisodes />

          {/*About Us Section */}
          <div className='container my-5 py-5 ' >
            <div className="row d-flex flex-column flex-md-row">
              <div className="col position-relative">
                <div className='border border-info border-2  rounded-start-pill align-self-stretch' id='aboutUsSection' >
                </div>
              </div>
              <div className="col" >
                <h3 className="mt-2 fs-4">Leslie & Lisi</h3>
                <h1 className='my-3'>We have Created This Podcast Based on Positivity, and Success for others.</h1>
                <p className="fs-6">We are artists, writers, and podcast host's.</p>
                <a className='btn btn-info' href="/about">About Us</a>
              </div>
            </div>
          </div>

          {/* Winedown Wednesday - Section*/}
          <div className='container py-5' >

            <div className="row d-flex flex-column-reverse flex-md-row p-2" >

              <div className='col' >
                <h3 className="text-end fs-4 mt-2">Wine Down Wednesday's.</h3>
                <h1 className='my-3'>Every wednesday join our  <a href='https://www.instagram.com/p/CS8IA14L3DU/' id='wine_down_IGLink' target='_blank'>Insta-Live<i className="fa-brands fa-instagram"></i></a>  to be a part of our latest episode and to see whats to come.</h1>
                <div className='row m-0 my-lg-4'>
                  <div className="col">
                    <ul className='true-crime-list '>
                      <li>Latest Episodes</li>
                      <li>Real-time Chat</li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className='true-crime-list list-style-bullet'>
                      <li>Market Coming Soon</li>
                      <li>Merch Coming Soon</li>
                    </ul>
                  </div>
                </div>
                <a className='btn btn-info' href="/about">More About Us</a>
              </div>

              <div className='col border border-info border-2 rounded-end-circle align-self-stretch ' id='wineDownWednesdayImg'>
                {/* background image set */}
              </div>
            </div>

          </div>

          {/* Subscribe Section */}
          <div className="container-fluid" id='subscribeToShow'>
            <div className="container"   >
              <div className="row">
                <div className='col text-center'>
                  <h3 className="fs-2">Join the Team</h3>
                  <h1 className="fs-1">Subscribe to The Show</h1>
                  <p id="subscribeMessage" className='mx-auto mb-4'>
                    Follow us here or on your favorite podcast app to get the scoop about relationships, family, lifestyle and so much more. </p>
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </AppContext.Provider>
    </>
  );
}
