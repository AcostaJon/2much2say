'use client'
// episodes page
// react component
import { useState } from 'react';
// bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// my components
import Episode from '@/app/components/episode/episode';
import Header from '../components/header';
import Footer from '../components/footer';


function Allepisodes(props) {
  const [n, setN] = useState(5);

  // returns an array of all episodes from props api call
  // const allEpisodes = props.episodes.map((episode) => (
  //   <li key={episode.id} id={episode.id} className='m-3' >
  //     <Episode spotifyLink={episode.external_urls.spotify} date={episode.release_date} length={episode.duration_ms} title={episode.name} desc={episode.description} src={episode.audio_preview_url} />
  //   </li>
  // ))


  // handles load more button: show 5 more episodes every click
  const handleLoadMore = (e) => {
    e.preventDefault()
    setN(n+5);
  }

  return (
    <>
    <Header />
    <main id='top' >
      {/* title */}
      <Container fluid className='bg-secondary  bg-opacity-10'>
        <Container>
          <Row className='my-5'>
            <Col className='text-center py-5'>
              <h1>Episodes</h1>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Episodes Section */}
      <Container className='text-center' >
        <ul >
          {/* {
           allEpisodes.slice(0,n)
          } */}
        </ul>
        {/* see more button */}
        <Button onClick={handleLoadMore} href='/episodes' variant="info" size="lg">Load More</Button>
      </Container>
    </main>
    <Footer />
    </>
  )
}

export default Allepisodes;