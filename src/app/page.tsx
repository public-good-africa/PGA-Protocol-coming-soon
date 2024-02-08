import Image from 'next/image';
import Navbar from '../components/Navbar';
import PgaIntro from '../components/PgaIntro';
import Message from '../components/Message';
import Connect from '../components/Connect';

export default function Home() {
  return (
    <div className="bg-body-pattern">
      <div className='container mx-auto '>
        <Navbar />
        <PgaIntro />
        <Message />
        <Connect />
        <Navbar top={false} />
      </div>
    </div>
  );
}
