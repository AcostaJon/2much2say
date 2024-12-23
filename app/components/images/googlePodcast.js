// react component
import Image from 'next/image';
// image source
import GoogleIcon from '@/public/google-icon.svg'

const GooglePodcast = () => (
  <Image 
    width={35}
    height={35}
    src={GoogleIcon} // Route to the image file
    alt="google podcast logo"
    title='Google Podcast'
    className='mx-3'
  />
);

export default GooglePodcast;