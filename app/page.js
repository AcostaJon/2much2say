'use client'
import { useEffect } from "react";
// import Link from 'next/link';
// css
// import styles from "./page.module.css";
// bootstrap components
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
//my components
// import MediaPlayer from '@/app/components/mediaplayer/mediaPlayer';
// import Subscribe from '@/app/components/subscribe'
// import LatestEpisodes from '@/app/components/episode/latestEpisodes';
// import Header from "./components/header";
// import Footer from "./components/footer";

export default function Home(props) {
  useEffect(() => {

    // get show
    fetch('/api/getShow')
      .then((data) => {
        return data.json()
      });

  })

  return (
    <>
      <h1>gndsal</h1>
    </>
  )

}


//   return (
//     <>
//      <Header />
//       <main id='top'>
//         {/*Introduction Section - real talk, over some chilled */}
//         <Container id='attentionGrabber'>
//           <Row >
//             <Col className='d-flex flex-column justify-content-end align-items-center'>
//               <h3>A PODCAST ABOUT SELF</h3>
//               <h1 className='my-3'> IMPROVEMENT, BALANCE, AND CONFIDENCE</h1>
//               <div className='attentionGrabberButtonConainer'>
//                 <Link href='/episodes'>
//                   <Button className='mb-3 mb-sm-0 me-sm-3' variant="outline-info" size="lg">All Episodes</Button>
//                 </Link>
//                 <Link href='#latestEpisodes'>
//                   <Button variant="outline-info" size="lg">Listen Now</Button>
//                 </Link>
//               </div>
//             </Col >
//           </Row>
//         </Container>

//         {/* media player */}
//         <p className='container my-3 text-center '><span className='text-info'>LATEST EPISODE:</span> </p>
//         {/* <MediaPlayer spotify={props.firstEpSpotifyLink} src={props.firstEpSrc} /> */}

//         {/* Latest Episodes Section */}
//         {/* <LatestEpisodes episodes={props.latestEp} /> */}

//         {/*About Us Section */}
//         <Container fluid className='my-5 py-5' >
//           <Container>
//             <Row xs={1} md={2}>
//               <Col md={5} lg={4} className='border border-info border-2 rounded-start-circle align-self-stretch' id='aboutUsSection' >
//                 {/* background image set */}
//               </Col>
//               <Col md={7} lg={8} >
//                 <h3>Leslie & Lisi</h3>
//                 <h1 className='mt-5 mb-4'>We have Created This Podcast Based on Positivity, and Success for others.</h1>
//                 <p className='mb-5'>We are artists, writers, and podcast host's.</p>
//                 <Link href='/about'>
//                   <Button variant="info" size="lg">About Us</Button>
//                 </Link>
//               </Col>
//             </Row>
//           </Container>
//         </Container>

//         {/* Reviews Section - We Love Your Reviews */}
//         <Container fluid className='py-5 my-5 bg-secondary  bg-opacity-10'>
//           <Container className='pb-5'>
//             <Row>
//               <Col className='text-center my-5'>
//                 <h3>We Love Your Reviews</h3>
//                 <h1>Leave a Comment</h1>
//               </Col>
//             </Row>
//             <Row >
//               <Col>
//                 {/* pwr comments plugin */}

//               </Col>
//             </Row>
//           </Container>
//         </Container>

//         {/* Winedown Wednesday - Section*/}
//         <Container className='py-5' >
//           <Row className="d-flex flex-column-reverse flex-md-row p-2 " xs={1} md={2} >
//             <Col className='pt-3' md={7} lg={8}>
//               <h1>Wine Down Wednesday's.</h1>
//               <p className='w-75 my-3'>Every wednesday join our  <a href='https://www.instagram.com/p/CS8IA14L3DU/' id='wine_down_IGLink' target='_blank'>INSTAGRAM LIVE</a>  to be a part of our latest episode and to see whats to come.</p>
//               <Row className='m-0 my-lg-4' xs={1} md={2}>
//                 <Col>
//                   <ul className='true-crime-list'>
//                     <li>Latest Episode</li>
//                     <li>Real-time Chat</li>
//                   </ul>
//                 </Col>
//                 <Col>
//                   <ul className='true-crime-list'>
//                     <li>Wine-Market Coming Soon</li>
//                     <li>Merch Coming Soon</li>
//                   </ul>
//                 </Col>
//               </Row>
//               <Link href='/about'>
//                 <Button variant="info" size='lg'>More About Us</Button>
//               </Link>
//             </Col>
//             <Col md={5} lg={4} className='border border-info border-2 rounded-end-circle align-self-stretch ' id='wineDownWednesdayImg'>
//               {/* background image set */}
//             </Col>
//           </Row>
//         </Container>

//         {/* Subscribe Section */}
//         <Container fluid id='subscribeToShow'>
//           <Container   >
//             <Row>
//               <Col className='text-center'>
//                 <h3>Join the Team</h3>
//                 <h1>Subscribe to The Show</h1>
//                 <p className='w-50 mx-auto mb-4'>
//                   Follow us here or on your favorite podcast app to get the scoop about relationships, family, lifestyle and so much more. </p>
//                 <Subscribe />
//               </Col>
//             </Row>
//           </Container>
//         </Container>
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }
