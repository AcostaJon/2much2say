'use client'
// modal/popup
import { useState } from 'react';
import Link from 'next/link';
// // image components
import ApplePodcast from '@/app/components/images/applePodcast';
import GooglePodcast from '@/app/components/images/googlePodcast';
import SubscribeSpotifyIcon from "@/app/components/images/subscribeSpotifyIcon";


function Subscribe() {

  return (
    <>
      {/* Modal */}
      <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal" >Subscribe</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Subscribe</h1>
              <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-evenly py-4">
              <Link href='https://podcasts.apple.com/gb/podcast/2much2say/id1582844332' className='text-center' title='Apple Podcast' target="_blank">
                <ApplePodcast />
                <p className='pt-2 mb-0'>itunes</p>
              </Link>
              <Link href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZmE0NGE4NC9wb2RjYXN0L3Jzcw==' className='text-center' title='Google Podcast' target="_blank">
                <GooglePodcast />
                <p className='pt-2 mb-0'>google</p>
              </Link>
              <Link href='https://open.spotify.com/show/3p9jAp3NXRBXZJtyks5jsh' className='text-center' title='Google Podcast' target="_blank">
                <SubscribeSpotifyIcon />
                <p className='pt-2 mb-0'>spotify</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
