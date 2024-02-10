import Image from 'next/image';
import Link from 'next/link';

function SocialGroup({ top }) {
  return (
    <div className={top ? 'flex gap-5' : 'flex gap-5'}>
      <Link href="https://t.me/publicgoodAfrica/1" target='_blank' scroll={false}>
        <Image alt="social-icon" src={'/telegram.svg'} width={50} height={50} />
      </Link>
      <Link href="https://twitter.com/publicgoodAfric" target='_blank' scroll={false}>
        <Image alt="social-icon" src={'/twitter.svg'} width={50} height={50} />
      </Link>
      <Link href="https://mirror.xyz/publicgoodafrica.eth" target='_blank' scroll={false}>
        <Image alt="social-icon" src={'/note.svg'} width={50} height={50} />
      </Link>
    </div>
  );
}

export default SocialGroup;
