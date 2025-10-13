import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

const imageArray = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg',
  'images/img8.jpg',
  'images/img9.jpg',
  'images/img10.jpg',
  'images/img11.jpg',
  'images/img12.jpg',
  'images/img13.jpg',
  'images/img14.jpg'
];


  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 25%',
        end: 'bottom -50%',
        scrub: true,
        pin: true,
      }
    })
  })

  useGSAP



  return (
    <div>
      {/* sec 1 */}
      <div className='section1'>
        <div ref={imageDivRef} className='h-[35vh] rounded-xl overflow-hidden w-60 absolute left-[30vw] top-[25vh] '>
          <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64" alt="" />
        </div>
        {/* text div */}
        <div className='relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e
              Douze</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-[3vw] leading-[3vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>

      {/* sec 2 */}
      <div className="section2 h-[200vh]">

      </div>
    </div>
  )
}

export default Agence