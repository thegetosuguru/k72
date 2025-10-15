import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'images/img1.webp',
    'images/img2.webp',
    'images/img3.webp',
    'images/img4.webp',
    'images/img5.webp',
    'images/img6.webp',
    'images/img7.webp',
    'images/img8.webp',
    'images/img9.webp',
    'images/img10.webp',
    'images/img11.webp',
    'images/img12.webp',
    'images/img13.webp',
    'images/img14.webp'
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })



  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='pl-[40%]  mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div
        id="page2"
        className="bg-gradient-to-b from-black via-neutral-900 to-white text-white overflow-hidden"
      >

        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-[9vw] font-extrabold uppercase tracking-tight leading-none animate-fade-in">
            Le <span className="text-gray-400">Processus</span>
          </h2>
          <p className="mt-6 text-xl max-w-2xl text-gray-400 animate-fade-in-delay">
            Chaque projet est une exploration créative. <br />
            Nous unissons stratégie, design et mouvement pour créer des expériences qui inspirent.
          </p>
          <div className="mt-10 w-24 h-[2px] bg-lime-300 animate-pulse"></div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-20 py-40 px-10 bg-neutral-950">
          {[
            {
              num: "01",
              title: "Découverte",
              text: "Nous explorons la culture, les valeurs et la vision de votre marque afin de révéler son authenticité.",
              img: "images/img3.webp",
            },
            {
              num: "02",
              title: "Conception",
              text: "Nous concevons une identité visuelle et narrative qui résonne émotionnellement et durablement.",
              img: "images/img8.webp",
            },
            {
              num: "03",
              title: "Mouvement",
              text: "Nous insufflons vie à vos idées à travers le design, l’animation et les expériences numériques.",
              img: "images/img11.webp",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center md:items-start max-w-sm text-center md:text-left transform transition-all duration-700 hover:-translate-y-3 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="overflow-hidden rounded-2xl mb-6 shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-[300px] brightness-90 group-hover:brightness-110 transition-all duration-500"
                />
              </div>
              <h3 className="text-6xl font-bold mb-4 text-gray-500 group-hover:text-white transition-colors duration-500">
                {item.num}
              </h3>
              <h4 className="text-3xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-500">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen pb-10">
          <img
            src="images/img4.webp"
            alt="Créons ensemble"
            className="absolute w-full h-full object-cover object-top opacity-30 blur-sm scale-110"
          />
          <div className="relative text-center">
            <h2 className="text-[8vw] font-bold uppercase mix-blend-difference animate-fade-in">
              Créons <span className="text-gray-400">ensemble</span>
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-xl mx-auto animate-fade-in-delay">
              Ensemble, bâtissons des marques vivantes et inoubliables.
            </p>
            <a
              href="/"
              className="inline-block mt-10 px-10 py-4 text-2xl border border-gray-500 rounded-full transition-all duration-300 hover:bg-lime-300 hover:text-black hover:border-lime-300"
            >
              Return to Home
            </a>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Agence
