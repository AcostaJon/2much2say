'use client'
// modal/popup
import { useState } from 'react';
import Link from 'next/link';
// bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// image components
import ApplePodcast from '@/app/components/images/applePodcast';
import GooglePodcast from '@/app/components/images/googlePodcast';
import SubscribeSpotifyIcon from "@/app/components/images/subscribeSpotifyIcon";


function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/* Modal */}
      <button type="button" className="btn btn-outline-info" onClick={handleShow}>Subscribe</button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header className='bg-black text-white'>
          <Modal.Title>Your Favorite Platforms</Modal.Title>
          <Button variant="balck" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body  className='d-flex bg-black justify-content-between'  >
          <Link href='https://podcasts.apple.com/gb/podcast/2much2say/id1582844332' title='Apple Podcast' target="_blank">
            <ApplePodcast />
          </Link>
          <Link href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZmE0NGE4NC9wb2RjYXN0L3Jzcw==' title='Google Podcast' target="_blank">
            <GooglePodcast />
          </Link>
          <Link href='https://open.spotify.com/show/3p9jAp3NXRBXZJtyks5jsh' title='Google Podcast' target="_blank">
            <SubscribeSpotifyIcon />
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
