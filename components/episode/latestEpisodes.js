import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
// components
import LatestEpisode from './latestEpisode';

function LatestEpisodes(props) {
  let i = 0;
  const allEpisodes = props.episodes.map((episode) => (
    <Col key={i++}>
      <LatestEpisode spotifyLink={episode.external_urls.spotify} date={episode.release_date} length={episode.duration_ms} title={episode.name} desc={episode.description} src={episode.audio_preview_url} />
    </Col>
  ))

  return (
    <Container className='py-5 my-5' id='latestEpisodes'>
      <Row>
        <Col className='text-center'>
          <h3>Start Listening Today</h3>
          <h1>Latest Episodes</h1>
          <Row xs={1} md={3} className='my-5'>
            {allEpisodes}
          </Row>
          <Button href='/episodes' variant="info" size="lg">More Episodes</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default LatestEpisodes;