import React from 'react'
import Video from '../Components/home/Video'
import HomeHeroText from '../Components/home/HomeHeroText'
import HomeBottomText from '../Components/home/HomeBottomText'


const Home = () => {
  return (
    <div >
      <div className='h-screen w-screen fixed'>
        <Video></Video>
      </div>
      <div className='h-screen w-screen relative flex flex-col  md:justify-around lg:justify-between justify-end'>
        <HomeHeroText></HomeHeroText>
        <HomeBottomText></HomeBottomText>
      </div>
    </div>
  )
}

export default Home