// bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
// image  component
import PhoneandCoffee from '../images/phoneCoffee';
// my component
import MediaPlayer from '@/app/components/mediaplayer/mediaPlayer';

const Episode = (props) => {

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
        // Episode
        <Container>
            <Row md={1} className='p-3 align-items-center bg-secondary  bg-opacity-10' >
                <Col xs={12} md={3} lg={2}>
                    {/* episode image */}
                    <div className='image-container' >
                        <PhoneandCoffee />
                    </div>
                </Col>
                <Col className="p-2 flex-grow-1" md={9} >
                    {/* episode information */}
                    <div className='info-container text-start'>
                        <Row className='episodeMetaData justify-content-between' xs={1} md={2}>
                            <Col md={2} >
                                {/* date */}
                                <p>{props.date}</p>
                            </Col>
                            <Col>
                                {/* length */}
                                <p>{msToTime(milliSeconds)}</p>
                            </Col>
                        </Row>
                        {/*  title */}
                        <h1 className='episodeTitle'>{props.title}</h1>
                        {/*  description */}
                        <p className='episodeDesc d-none d-md-block'>{props.desc}</p>
                        {/* source */}
                        <MediaPlayer src={props.src} spotify={props.spotifyLink} />
                    </div>

                </Col>
            </Row >
        </Container>
    )
}

export default Episode;

