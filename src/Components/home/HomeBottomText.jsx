import React from 'react'
import { Link } from 'react-router-dom'
import Clock from './Clock'


const HomeBottomText = () => {
  return (
    <div className='text-white flex flex-col items-center gap-5 font-[lau5] h-fit p-2'>
      <div className="w-screen pl-[60vw] pr-2 lg:pl-[85vw] md:pl-[70vw] flex">
        <p className=" text-start leading-6 font-[lau5] text-md">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      </div>
      <div className='flex gap-3 justify-center'>
        <Link to='/projects' className='hover:border-lime-300 hover:text-lime-300 border-5  border-white rounded-full px-6 py-0 items-center justify-center  uppercase text-[5vw] '>Projects</Link>
        <Link to='/agence' className='hover:border-lime-300 hover:text-lime-300 border-5  border-white rounded-full px-6 py-0 items-center justify-center  uppercase text-[5vw] '>Agence</Link>
      </div>
      <div className='absolute bottom-0 left-0 pl-2'>
              <Clock></Clock>
      </div>
    </div>
  )
}

export default HomeBottomText