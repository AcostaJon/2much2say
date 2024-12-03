'use client'
// react
import Link from 'next/link';
import {useEffect, useState } from 'react';
// image components
import ApplePodcast from '@/app/components/images/applePodcast';
import GooglePodcast from '@/app/components/images/googlePodcast';
import SubscribeSpotifyIcon from "@/app/components/images/subscribeSpotifyIcon";

function Footer() {
    const [recentEpisodes, setRecentEpisodes] = useState([]);

    useEffect(() => {
        // get recent episodes (first 6)
        fetch('/api/getShow')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                const first = data.episodes.items[1]
                const second = data.episodes.items[2]
                const third = data.episodes.items[3]
                const fourth = data.episodes.items[4]
                const fifth = data.episodes.items[5]
                const sixth = data.episodes.items[6]

                setRecentEpisodes([first, second, third, fourth, fifth, sixth])
            })
    }, [])

    return (
        // Footer
        <footer >
            <div className='container pt-4 pb-3'>
                <div className='row '>
                    {/* column 1 */}
                    <div className='col-12 col-md-5'>
                        <div className=''>
                            <p className='footer-header font-weight-bold'>Recent Episodes</p>
                            <ul>
                                {
                                    recentEpisodes.map((episode) => (
                                        <li key={episode.id} >
                                            <a href={'/about'}  >
                                                {episode.name}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    {/* column 2 */}
                    <div className='col-12 col-md-4 my-1'>
                            <p className='footer-header font-weight-bold'> Pages</p>
                            <ul>
                                <li className='mb-1'><Link href="/">Home</Link></li>
                                <li className='mb-1'><Link href="/about">About</Link></li>
                                <li className='mb-1'><Link href="/episodes">Episodes</Link></li>
                                <li className='mb-1'><Link href="/reviews">Reviews</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                    </div>
                    {/* column 3 */}
                    <div className='col col-md-3'>
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