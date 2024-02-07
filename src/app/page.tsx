import Image from 'next/image';
import homeImg from '/public/home.jpg';
import Button from '../components/Button';
import Logo from '../components/Logo';
import SocialGroup from '../components/SocialGroup';

export default function Home() {
  return (
    <div>
      <h1 className='font-bold flex justify-center'>Home page</h1>
      <Button />
      <Logo />
      <SocialGroup />
      
    </div>
  );
}
