// react component
import Image from 'next/image';
// image source
import AppleIcon from '@/public/apple-icon.svg'


const ApplePodcast = () => (
  <Image
    width={50}
    height={50}
    src={AppleIcon} // Route to the image file
    alt="apple podcast logo"
    title='Apple Podcast'
  />
);

export default ApplePodcast;