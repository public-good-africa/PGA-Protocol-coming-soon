import React from 'react';
import Button from './Button';

export default function PgaIntro() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div>
        <p className="text-4xl leading-10 mb-3 font-medium">
          Step into a realm where intention  
        </p>
        <p className="text-4xl leading-10 font-medium">
          thrives and dreams take flight.
        </p>
      </div>
      <div className="py-5 text-center font-medium text-base">
        <p className="">
          We are building a platform and community where funding, collaboration,
          and innovation converge to create
        </p>
        <p>
          positive impacts. We are crafting a space where web3 meets one of its
          noblest potential - empowering Africa!
        </p>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}