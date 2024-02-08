import Image from 'next/image';
import Navbar from '../components/Navbar';
import PgaIntro from '../components/PgaIntro';
import Message from '../components/Message';
import Connect from '../components/Connect';

export default function Home() {
  return (
    <div className='container mx-auto bg-body-pattern'>
      <Navbar />
      <PgaIntro />
      <Message />
      <Connect />
      <Navbar top={false} />
    </div>
  );
}
