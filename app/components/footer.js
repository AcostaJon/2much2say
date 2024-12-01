// react component
import Link from 'next/link';
// image components
import ApplePodcast from '@/app/components/images/applePodcast';
import GooglePodcast from '@/app/components/images/googlePodcast';
import SubscribeSpotifyIcon from "@/app/components/images/subscribeSpotifyIcon";

function Footer(props) {

    // returns array of recent episodes
    // const recentEpisodes = props.latestEp.map((episode) => (
    //     <li key={episode.id} >
    //         "
    //         <Link href={`/episodes/#${episode.id}`}>
    //             {episode.name}
    //         </Link>
    //         "
    //     </li>
    // ))


    return (
        // Footer
        <footer >
            <div className='container pt-4 pb-3'>
                <div className='row '>
                    {/* column 1 */}
                    <div className='col-8 col-lg-5'>
                        <div className=''>
                            <p className='footer-header font-weight-bold'>Recent Episodes</p>
                            <ul>
                                {/* {recentEpisodes} */}
                            </ul>
                        </div>
                    </div>
                    {/* column 2 */}
                    <div className='col-4 col-lg-5 my-1'>
                        <div className=''>
                            <p className='footer-header font-weight-bold'> Pages</p>
                            <ul>
                                <li className='mb-1'><Link href="/">Home</Link></li>
                                <li className='mb-1'><Link href="/about">About</Link></li>
                                <li className='mb-1'><Link href="/episodes">Episodes</Link></li>
                                <li className='mb-1'><Link href="/reviews">Reviews</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* column 3 */}
                    <div className='col col-lg-2'>
                        <div className='row'>
                            <div className='col-12'>
                                <div >
                                    <p className='footer-header font-weight-bold'>Follow Our Podcast</p>
                                    <ul className='d-flex'>
                                        <li>
                                            {/* apple */}
                                            <Link href='https://podcasts.apple.com/gb/podcast/2much2say/id1582844332' target='_blank'>
                                                <ApplePodcast />
                                            </Link></li>
                                        <li className='mx-2'>
                                            {/* google */}
                                            <Link href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81ZmE0NGE4NC9wb2RjYXN0L3Jzcw==' target='_blank'>
                                                <GooglePodcast />
                                            </Link></li>
                                        <li>
                                            {/* spotify */}
                                            <Link href='https://open.spotify.com/show/3p9jAp3NXRBXZJtyks5jsh' title='Google Podcast' target="_blank">
                                                <SubscribeSpotifyIcon />
                                            </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  all rights reserved */}
            <div className='container-fluid bg-secondary  bg-opacity-10 py-3' >
                <p className='container mb-0'>&copy; 2023. All Rights Reserved </p>
            </div>
        </footer>
    );
}

export default Footer;