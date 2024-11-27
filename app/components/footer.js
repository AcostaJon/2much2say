// // bootstrap components
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // react component
// import Link from 'next/link';
// // image components
// import ApplePodcast from '@/app/components/images/applePodcast';
// import GooglePodcast from '@/app/components/images/googlePodcast';
// import SubscribeSpotifyIcon from "@/app/components/images/subscribeSpotifyIcon";

// function Footer(props) {

//     // returns array of recent episodes
//     // const recentEpisodes = props.latestEp.map((episode) => (
//     //     <li key={episode.id} >
//     //         "
//     //         <Link href={`/episodes/#${episode.id}`}>
//     //             {episode.name}
//     //         </Link>
//     //         "
//     //     </li>
//     // ))


//     return (
//         // Footer
//         <footer >
//             <Container className='mt-5'>
//                 <Row xs={1} md={3}>
//                     {/* column 1 */}
//                     <Col className='my-3'>
//                         <div className='w-75 w-lg-25 mx-auto text-center'>
//                             <p className='footer-header font-weight-bold'>Recent Episodes</p>
//                             <ul>
//                                 {/* {recentEpisodes} */}
//                             </ul>
//                         </div>
//                     </Col>
//                     {/* column 2 */}
//                     <Col className='my-3'>
//                         <div className='w-75 w-lg-25 mx-auto text-center'>
//                             <p className='footer-header font-weight-bold'> Pages</p>
//                             <ul>
//                                 <li><Link href="/">Home</Link></li>
//                                 <li><Link href="/about">About</Link></li>
//                                 <li><Link href="/episodes">Episodes</Link></li>
//                                 <li><Link href="/reviews">Reviews</Link></li>
//                                 <li><Link href="/contact">Contact Us</Link></li>
//                             </ul>
//                         </div>
//                     </Col>
//                     {/* column 3 */}
//                     <Col className='my-3'>
//                         <Row>
//                             <Col>
//                                 <div className='w-75 w-lg-25 mx-auto text-center mb-4'>
//                                     <p className='footer-header font-weight-bold'>Follow Our Podcast</p>
//                                     {/* apple */}
//                                     <Link href='https://podcasts.apple.com/gb/podcast/2much2say/id1582844332' target='_blank'>
//                                         <ApplePodcast />
//                                     </Link>
//                                     {/* google */}
//                                     <Link className='mx-2' href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81ZmE0NGE4NC9wb2RjYXN0L3Jzcw==' target='_blank'>
//                                         <GooglePodcast />
//                                     </Link>
//                                     {/* spotify */}
//                                     <Link href='https://open.spotify.com/show/3p9jAp3NXRBXZJtyks5jsh' title='Google Podcast' target="_blank">
//                                         <SubscribeSpotifyIcon />
//                                     </Link>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//             </Container>
//             {/*  all rights reserved */}
//             <Container fluid className='bg-secondary  bg-opacity-10 py-3' >
//                 <p className='m-0'>&copy; 2023. All Rights Reserved </p>
//             </Container>
//         </footer>
//     );
// }

// export default Footer;