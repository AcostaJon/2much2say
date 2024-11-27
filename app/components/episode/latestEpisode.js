// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
// image
import PhoneandCoffee from '../images/phoneCoffee';
// media player
// mediaplayer component
import MediaPlayer from '@/app/components/mediaplayer/mediaPlayer';



const LatestEpisode = (props) => {

    // episode length in miliseconds
    let milliSeconds = props.length;
    // return episode time in correct format
    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + ':' + mins + ':' + secs;
    }

    return (
        // episode
        <Row xs={1} className='latestEpisode  bg-secondary  bg-opacity-10 py-5 px-3' >
            <Col >
                {/* episode image */}
                <div className='image-container' >
                    <PhoneandCoffee />
                </div>
            </Col>
            <Col className="p-2 " >
                {/* episode information */}
                <div className='info-container text-start'>
                    <div className='episodeMetaData d-flex flex-wrap' >

                        {/* props date */}
                        <p>{props.date}</p>
                        {/* props length */}
                        <p>{msToTime(milliSeconds)}</p>

                    </div>
                    {/* props title */}
                    <h2 className='episodeTitle'>{props.title.slice(0, 29) + "...."}</h2>
                    {/* props description */}
                    <p className='episodeDesc d-none d-md-block'>{props.desc}</p>
                    {/* props source */}
                    <MediaPlayer spotify={props.spotifyLink} src={props.src} />
                </div>

            </Col>
        </Row >
    )
}

export default LatestEpisode;

