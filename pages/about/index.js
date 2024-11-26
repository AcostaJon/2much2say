// about page
// react compnent
import Link from 'next/link';
// bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// image components
import PhoneandCoffee from '@/components/images/phoneCoffee';
import Logo from '@/components/images/logo';
import LisiAvatar from '@/components/images/lisi';

// my components
import Subscribe from '@/components/subscribe'
import LatestEpisodes from '@/components/episode/latestEpisodes';


function About(props) {
  return (
    <>
      <main id='top'>
        {/*Introduction Section - About our podcast */}
        <Container className='my-3 py-3'>
          <Row className='d-flex flex-column-reverse flex-md-row' xs={1} md={2}>
            <Col className='d-flex flex-column align-items-center align-items-md-start my-4 '>
              <h1>About Our <span className="text-info">Podcast</span></h1>
              <p  className='my-3 mx-2 mx-md-0'>Trane is the most popular podcast network in North America. We've been nominated to 23 Poddy awards and our creators are best in class.</p>
              <Link href='/episodes'> <Button variant='info' size='lg'>All Episodes</Button></Link>
            </Col>
            <Col>
              <PhoneandCoffee />
            </Col>
          </Row>
        </Container>

        {/* Only podcast I would listen to */}
        <Container fluid id='theonlyPodcast'>
          <Container className='text-center'>
            <Row>
              <Col>
                <h1 className='mx-3'>The Only Podcast I Want To Listen To</h1>
                <Container>
                  <Logo />
                  <p>Real Conversations</p>
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* Latest Episodes Section */}
        <LatestEpisodes episodes={props.latestEp} />

        {/* Our Team Section */}
        <Container className='my-5 py-3'>
          <Row >
            <Col>
              <h1>Our Team</h1>
              <p>This is brought to you by these awesome people</p>
            </Col>
          </Row>
          <Row xs={1} md={2} className='text-center'>
            <Col>
              <h3>Host</h3>
              <h1>
                Leslie Acosta
              </h1>
            </Col>
            <Col>
              <LisiAvatar />
              <h3>Host</h3>
              <h1>
                Lysandra Colon
              </h1>
            </Col>
          </Row>
        </Container>

        {/*Subscribe Section - join the part */}
        <Container fluid id='jointheParty'>
          <Container className='text-center'>
            <Row>
              <Col>
                <h1>Join the Party</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className='m-auto my-4 w-50'>Our community is what drives us forward. We couldn't have done it without your support! We work hard to produce the best content we possible can.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Subscribe />
              </Col>
            </Row>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default About;