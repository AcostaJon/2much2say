// react comonent
import Image from 'next/image';
// image source
import introMicImage from '@/public/introMic.jpg';

const Amp = () => (
  <Image id='ampImage'
    src={introMicImage} // Route of the image file
    alt="image of amplifier"
    priority
  />
);

export default Amp;