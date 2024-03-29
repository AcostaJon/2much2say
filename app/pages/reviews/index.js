// reviews page
// react component
import Script from 'next/script';
// bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Reviews() {
  return (
    <>
      <main id='top'>
        {/* title */}
        <Container fluid className=' bg-secondary  bg-opacity-10'>
          <Container>
            <Row className='my-5'>
              <Col className='text-center py-5'>
                <h1>Reviews</h1>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* power commenting system */}
        <Container>
          <div className="powr-comments" id="a0224ee1_1695234505"></div><Script src="https://www.powr.io/powr.js?platform=html" />
        </Container>
      </main>
    </>
  );
}

export default Reviews;