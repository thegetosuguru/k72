import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center font-[lau5] justify-center gap-3 h-fit p-2'>
      <Link to='/projects' className='hover:border-lime-300 hover:text-lime-300 border-3  border-white rounded-full px-6 py-0 items-center justify-center  uppercase text-[3vw] '>Projects</Link>
      <Link to='/agence' className='hover:border-lime-300 hover:text-lime-300 border-3  border-white rounded-full px-6 py-0 items-center justify-center  uppercase text-[3vw] '>Agence</Link>
    </div>
  )
}

export default HomeBottomText