'use client'
// react component
import { useState, useEffect } from 'react';
// my components
import Episode from '@/app/components/episode/episode';
import Header from '../components/header';
import Footer from '../components/footer';


export default function Allepisodes() {
  const [n, setN] = useState(5);
  const [allEpisodes, setAllEpisodes] = useState([]);

  useEffect(() => {

    // get latest episode
    fetch('/api/getShow')
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        setAllEpisodes(data.episodes.items)
      })

  }, [])


  // handles load more button: show 5 more episodes every click
  const handleLoadMore = (e) => {
    e.preventDefault()
    setN(n + 5);
  }

  // returns an array of all episodes from props api call
  const episodes = allEpisodes.map((episode) => (

      <div className='col-12 col-md-4 mb-5 mb-md-0 '  key={episode.id} id={episode.id} >
        <Episode spotifyLink={episode.external_urls.spotify} date={episode.release_date} length={episode.duration_ms} title={episode.name} desc={episode.description} src={episode.audio_preview_url} />
      </div>

  ))

  return (
    <>
      <Header />
      <main id='top' >
        {/* title */}
        <div className='container-fluid bg-secondary  bg-opacity-10'>
          <div className='container'>
            <div className='row my-5'>
              <div className='col text-center py-5'>
                <h1>Episodes</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Episodes  */}
        <div className='container text-center' >
          <div className='row rg-5'>
            {episodes}
          </div>
          {/* see more button */}
          <a className='btn btn-info' onClick={handleLoadMore}  >Load More</a>
        </div>
      </main>
      <Footer />
    </>
  )
}
