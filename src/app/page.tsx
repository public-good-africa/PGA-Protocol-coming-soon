import Image from 'next/image';
import homeImg from '/public/home.jpg';
import Button from '../components/Button';
import Logo from '../components/Logo';
import SocialGroup from '../components/SocialGroup';
import PgaIntro from '../components/PgaIntro';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Logo />
      <SocialGroup />
      <Button />
      <PgaIntro />
    </div>
  );
}
