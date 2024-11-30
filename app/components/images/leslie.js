// react component
import Image from 'next/image';
// image source
import Leslie from '';

const LeslieAvatar = () => (
  <Image className="rounded-circle my-2"
    id='leslieAvatar'
    src={Leslie} // Route of the image file
    title='Host'
    alt='leslie profile picture'
  />
);

export default LeslieAvatar;