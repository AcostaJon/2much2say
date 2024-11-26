// react component
import Link from 'next/link';
// bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// image component
import SpotifyPodcast from '../images/spotifyPodcast';
// styles
import Styles from './mediaplayer.module.css'

const MediaPlayer = (props) => {

    return (

        <Container className='mt-4' >
            {/* media player */}
            <Row>
                <Col>
                    <div className={Styles.container}>
                        <audio controls controlsList={"nodownload"} src={props.src} />
                        <Row >
                            <Col className='d-flex align-items-center justify-content-center' >
                                <Link href={props.spotify} target="_blank" title='listen to full episode on spotify' className='me-2'>
                                    Full Episode
                                </Link>
                                <SpotifyPodcast />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MediaPlayer
