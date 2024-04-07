import { Button } from 'flowbite-react';

function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about HTML, CSS & JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout the Web Developer Bootcamp 2024 by Colt Steele
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none mt-5'>
                <a href="https://www.udemy.com/course/the-web-developer-bootcamp/?couponCode=LETSLEARNNOWPP" target='_blank' rel='noopener noreferrer'>
                    Web Developer Bootcamp 2024
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://imgs.search.brave.com/7D3XxK6I3FUF3XjRqYf5dFYaBUi5tpu6b7ktEwgvL84/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLy1O/MkJ3b2EyZnpaUS9Z/S2M1VFFQRHRBSS9B/QUFBQUFBQW5yZy91/Vk9XNnJXVVVyQTUy/TklqX1RDMmNZRFVv/ci1vejdvZmdDTGNC/R0FzWUhRL3czOTct/aDIyMy9pbWFnZS5w/bmc" />
        </div>
    </div>
  )
}

export default CallToAction