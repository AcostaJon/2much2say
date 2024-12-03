// components
import Episode from "./episode";
// context
import { useContext } from "react";
import { AppContext } from "../context/context";

function LatestEpisodes() {

    const contextObject = useContext(AppContext)
    const episodes = contextObject.firstThree;

    let i = 0;
    const allEpisodes = episodes.map((episode) => (
        <div className="col-12 col-md-4 mb-5 mb-md-0" key={i++}>
            <Episode spotify={episode.external_urls.spotify} date={episode.release_date} length={episode.duration_ms} title={episode.name} desc={episode.description} src={episode.audio_preview_url} />
        </div>
    ))

    return (
        <div className='container mt-5 mb-5 ' id='latestEpisodes'>
            <div className='row'>
                <div className='col text-center' >
                    <h1>Start Listening Today</h1>
                    <h3 className="fw-light mt-3">Latest Episodes</h3>
                    <div className='row mb-1 mt-4 mb-lg-4  align-items-end '>
                        {allEpisodes}
                    </div>
                    <a href='/episodes' className="btn btn-info">More Episodes</a>
                </div>
            </div>
        </div>
    )
}

export default LatestEpisodes;