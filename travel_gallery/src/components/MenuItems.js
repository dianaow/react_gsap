import React, {useLayoutEffect, useRef} from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const StyledProjectItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  pointer-events: auto;
  cursor: pointer;
  &:hover {
    z-index: 2
  }
  .project__item-text {
    display: block;
    position: relative;
    font-size: 5rem;
    font-family: "italiana", serif;
    color: #000;
  }
  .word {
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
  }
  .clone {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
  }
`
const StyledImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  .project__image {
    position: absolute;
    opacity: 0;
  }
`

const MenuItems = ({name, images, projectsRef}) => {

  const imagesRef = useRef()
  const wordRef = useRef()
  const wordRefClone = useRef()
  
  useLayoutEffect(() => {
    const getAllProjectItems = gsap.utils.toArray(".project__item")
    gsap.set(getAllProjectItems, {opacity: 0, y: 200})
    gsap.to(getAllProjectItems, {
      opacity: 1,
      stagger: 0.1,
      y: 0
    })
  }, [])

  const handleMouseEnter = (event, name) => {
    const getAllProjectItems = gsap.utils.toArray(".project__item")
    const getAllImages = gsap.utils.toArray(".project__image--" + name)
    const getSiblings = getAllProjectItems.filter((item) => item.innerText !== name + '\n' + name)

    gsap.set(getAllImages.slice(0, 3), {opacity: 0, x: -250})
    gsap.set(getAllImages.slice(3, 6), {opacity: 0, x: 250})
    gsap.to(getAllImages, {
      opacity: 1,
      x: 0
    })
    gsap.to(getSiblings, {
      opacity: 0.2
    })
    gsap.to(wordRef.current.children, {
      y: "100%",
      rotationX: -90,
      opacity: 0,
      duration: 1,
      ease: "power2",
      stagger: 0.05
    })
    gsap.to(wordRefClone.current.children, {
      startAt: {y: "-100%", rotationX: 90, opacity: 0},
      y: "0%",
      rotationX: 0,
      opacity: 1,
      duration: 1,
      ease: "power2",
      stagger: 0.05
    })
  }

  const handleMouseLeave = () => {
    const getAllProjectItems = gsap.utils.toArray(".project__item")
    const getAllImages = gsap.utils.toArray(".project__image")
    
    gsap.to(getAllImages, {
      opacity: 0
    })
    gsap.to(getAllProjectItems, {
      opacity: 1
    })
    gsap.to(wordRef.current.children, {
      startAt: {y: "100%", rotationX: -90, opacity: 0},
      y: "0%",
      rotationX: 0,
      opacity: 1,
      duration: 1,
      ease: "power2",
      stagger: 0.05
    })
    gsap.to(wordRefClone.current.children, {
      y: "-100%",
      rotationX: 90,
      opacity: 0,
      duration: 1,
      ease: "power2",
      stagger: 0.05
    })
  }

  const handleMouseMove = ({clientX, clientY}) => {
    const bound = projectsRef.current.getBoundingClientRect()
    const xVal = clientX - (bound.left + Math.floor(bound.width/2))

    gsap.to(imagesRef.current, {
      duration: 1.2,
      x: xVal,
      y: Math.random() * 20,
      ease: "none"
    })
  }

  return (
    <>
    <StyledProjectItem className="project__item">
      <span 
        className='project__item-text'
        onMouseEnter={(event) => handleMouseEnter(event, name)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <span className="word" ref={wordRef}>
          {name.split("").map((item, i) => {
            return (
              <span
                key={i}
                className='char'
                style={{display:"inline-block", willChange: 'transform'}}
              >
                {item}
              </span>
            )
          })}
        </span>
        <span className="word clone" ref={wordRefClone}>
          {name.split("").map((item, i) => {
            return (
              <span
                key={i}
                className='char'
                style={{display:"inline-block", willChange: 'transform'}}
              >
                {item}
              </span>
            )
          })}
        </span>
      </span>
    </StyledProjectItem>
    <StyledImages className='project__images' ref={imagesRef}>
      {images.map((img, i) => (
        <div 
          className = {"project__image project__image--" + name}
          style={{left: i < 3 ? Math.random()*100 + window.innerWidth*0.1 : -Math.random()*200 + window.innerWidth*0.8, top: i < 3 ? window.innerHeight/3 * i : window.innerHeight/3 * (5-i)}}
        >
          <img 
            src={require('../assets/' + img)} 
            width='auto' 
            height={window.innerHeight/3 - 30}
          ></img>
        </div>
      ))}
    </StyledImages>
    </>
  )
}

export default MenuItems

