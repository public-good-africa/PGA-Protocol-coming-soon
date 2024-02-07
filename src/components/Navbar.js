import React from 'react';
import Logo from '../components/Logo';
import SocialGroup from '../components/SocialGroup';
import Button from '../components/Button';

export default function Navbar({ top = true }) {
  return (
    <div className="bg-[#ebebeb] bg-opacity-70 flex justify-between h-12 items-center align-middle rounded-full p-10 my-12">
      <Logo />
        {!top  ? <p className='text-sm font-normal'>© 2024 PublicgoodAfrica.eth. All rights reserved.</p>: null}
      <div className="flex items-center gap-5">
        <SocialGroup />
        <Button />
      </div>
    </div>
  );
}
