import React from 'react';
import { Button } from 'flowbite-react';

function CustomCallToAction({ imageUrl, heading, description, buttonText, buttonLink }) {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                {heading}
            </h2>
            <p className='text-gray-500 my-2'>
                {description}
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none mt-5'>
                <a href={buttonLink} target='_blank' rel='noopener noreferrer'>
                    {buttonText}
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={imageUrl} alt="Call to action" />
        </div>
    </div>
  )
}

export default CustomCallToAction;
