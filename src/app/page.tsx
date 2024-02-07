import Image from 'next/image';
import homeImg from '/public/home.jpg';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div>
      <h1 className='font-bold flex justify-center'>Home page</h1>
      <Button />
      <Logo />
    </div>
  );
}
