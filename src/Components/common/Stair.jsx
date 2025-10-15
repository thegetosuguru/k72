import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLocation } from 'react-router-dom'

const Stair = (props) => {
  const currentPath = useLocation().pathname
  const stairParentRef = useRef(null)
  const isFirstLoad = useRef(true)
  const pageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })
    const parent = stairParentRef.current

    if (isFirstLoad.current) {
      isFirstLoad.current = false

      gsap.set(pageRef.current, { opacity: 1, scale: 1 })
      gsap.set(parent, { display: "none" })
      return
    }

    tl.set(parent, { display: "block" })

    tl.fromTo(
      ".stair",
      { height: 0, y: 0 },
      {
        height: "100%",
        duration: 0.25,
        stagger: { amount: 0.4, from: "end" },
        ease: "power3.out",
      }
    )

    tl.to({}, { duration: 0.2 })

    tl.to(".stair", {
      y: "100%",
      duration: 0.25,
      stagger: { amount: 0.4, from: "start" },
      ease: "power3.inOut",
    })

    tl.set(parent, { display: "none" })

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    })
  }, [currentPath])

  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-50 top-0 left-0 pointer-events-none"
      >
        <div className="h-full flex w-full">
          <div className="stair h-full w-1/5 bg-[#000]" />
          <div className="stair h-full w-1/5 bg-[#000]" />
          <div className="stair h-full w-1/5 bg-[#000]" />
          <div className="stair h-full w-1/5 bg-[#000]" />
          <div className="stair h-full w-1/5 bg-[#000]" />
        </div>
      </div>

      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stair
