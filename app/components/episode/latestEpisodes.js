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
        <div className='container py-5 my-5' id='latestEpisodes'>
            <div className='row'>
                <div className='col text-center' >
                    <h3>Start Listening Today</h3>
                    <h1>Latest Episodes</h1>
                    <div className='row my-5'>
                        {allEpisodes}
                    </div>
                    <a href='/episodes' className="btn btn-info">More Episodes</a>
                </div>
            </div>
        </div>
    )
}

export default LatestEpisodes;