'use client'
// image component
import SpotifyPodcast from '../images/spotifyPodcast';
// styles
import Styles from './mediaplayer.module.css'


const MediaPlayer = (props) => {
    return (

        <div className='container mt-4' >
            {/* media player */}
            <div className='row'>
                <div className='col'>
                    <div className={Styles.container}>
                        <audio controls controlsList={"nodownload"} src={props.src} />
                        <div className='row' >
                            <div className='col d-flex align-items-center justify-content-center my-3' >
                                <a href={props.spotify} target="_blank" title='listen to full episode on spotify' className='me-2'>
                                    Full Episode
                                </a>
                                <SpotifyPodcast />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaPlayer
