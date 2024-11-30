// components
import LatestEpisode from './latestEpisode';

function LatestEpisodes(props) {
  let i = 0;
  // const allEpisodes = props.episodes.map((episode) => (
  //   <Col key={i++}>
  //     <LatestEpisode spotifyLink={episode.external_urls.spotify} date={episode.release_date} length={episode.duration_ms} title={episode.name} desc={episode.description} src={episode.audio_preview_url} />
  //   </Col>
  // ))

  return (
    <div className='container py-5 my-5' id='latestEpisodes'>
      <div className='row'>
        <div className='col text-center' >
          <h3>Start Listening Today</h3>
          <h1>Latest Episodes</h1>
          <div xs={1} md={3} className='row my-5'>
            {/* {allEpisodes} */}
          </div>
          <button  href='/episodes' variant="info"  type="button" className="btn">More Episodes</button>
        </div>
      </div>
    </div>
  )
}

export default LatestEpisodes;