import React from 'react';
import Button from './Button';

export default function PgaIntro() {
  return (
    <div className="flex flex-col justify-center items-center text-center leading-5">
      <div className=' font-bungee sm:text-3xl md:text-4xl md:leading-10'>
        <p className="mb-3 font-medium">
          Step into a realm where intention  
        </p>
        <p className="font-medium">
          thrives and dreams take flight.
        </p>
      </div>
      <div className="py-5 px-5 md:p-0 text-center font-satoshi font-medium sm:text-xs md:text-base opacity-70">
        <p className="">
          We are building a platform and community where funding, collaboration,
          and innovation converge to create
        </p>
        <p>
          positive impacts. We are crafting a space where web3 meets one of its
          noblest potential - empowering Africa!
        </p>
      </div>
      <div className='my-3'>
        <Button />
      </div>
    </div>
  );
}
