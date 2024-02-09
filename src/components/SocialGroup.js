import Image from 'next/image';

function SocialGroup({ top }) {
  return (
    <div className={top ? 'hidden md:flex gap-5' : 'flex gap-5'}>
      <span>
        <Image alt="social-icon" src={'/telegram.svg'} width={50} height={50} />
      </span>
      <span>
        <Image alt="social-icon" src={'/twitter.svg'} width={50} height={50} />
      </span>
      <span>
        <Image alt="social-icon" src={'/note.svg'} width={50} height={50} />
      </span>
    </div>
  );
}

export default SocialGroup;
