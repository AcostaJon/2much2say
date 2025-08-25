// react component
import Image from 'next/image';
// image source
import Spotifyicon from '@/public/spotify-icon.svg'

const SubscribeSpotifyIcon = () => (
  <Image 
    width={35}
    height={35}
    src={Spotifyicon} // Route to the image file
    title='Spotify Podcast'
    alt="Spotify icon"
  />
);

export default SubscribeSpotifyIcon;