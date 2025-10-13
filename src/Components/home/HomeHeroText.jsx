import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[lau3] pt-8 text-center'>
            <div className='text-[9vw] uppercase leading-[8vw]'>
                L'étincelle
            </div>
            <div className='flex justify-center items-center text-[9vw] uppercase leading-[8vw]'>
                qui
                <div className='h-[7vw] w-[15vw] -mt-3 rounded-full overflow-hidden'>
                    <Video></Video>
                </div>
                génère
            </div>
            <div className='text-[9vw] uppercase leading-[8vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText