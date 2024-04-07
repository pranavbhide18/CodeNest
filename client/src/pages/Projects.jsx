import CallToAction from '../components/CallToAction';
import CustomCallToAction from '../components/CustomCallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Learn Web Development and Project Building</h1>
      <CallToAction />
      <CustomCallToAction
        imageUrl="https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPuqXVkPj7ttWHlhfi9QZ8hFdqug"
        heading="Chai aur React"
        description="Learn React js from scratch and build great projects along the way"
        buttonText="Chai aur React"
        buttonLink="https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
      />
      <CustomCallToAction
        imageUrl="https://i.ytimg.com/vi/EH3vGeqeIAo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB3bTl6Q9h5Cjk6eRC4cshOHiETLQ"
        heading="Chai aur Javascript Backend"
        description="Learn javascript backend on a production level"
        buttonText="Chai aur Javascript Backend"
        buttonLink="https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW"
      />
    </div>
  )
}