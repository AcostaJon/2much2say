// react component
import Image from 'next/image';
// image source
import PhoneCoffee from '@/public/phonecoffee.jpg'

const PhoneandCoffee = () => (
  <Image className='img-fluid rounded'
    src={PhoneCoffee} // Route of the image file
    alt="Microphone"
  />
);

export default PhoneandCoffee;