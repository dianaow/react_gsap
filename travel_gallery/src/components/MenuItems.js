import React, {useLayoutEffect} from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const StyledProjectItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
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

const MenuItems = ({name, images}) => {

  images.map(img=>{
    
  })
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
    const getSiblings = getAllProjectItems.filter((item) => item.innerText !== name)
    console.log(event.target, getSiblings)
    gsap.set(getAllImages.slice(0, 3), {opacity: 0, x: -250})
    gsap.set(getAllImages.slice(3, 6), {opacity: 0, x: 250})
    gsap.to(getAllImages, {
      opacity: 1,
      x: 0
    })
    gsap.to(getSiblings, {
      opacity: 0.2
    })
  }

  const handleMouseLeave = (event, name) => {
    const getAllProjectItems = gsap.utils.toArray(".project__item")
    const getAllImages = gsap.utils.toArray(".project__image")
    gsap.to(getAllImages, {
      opacity: 0
    })
    gsap.to(getAllProjectItems, {
      opacity: 1
    })
  }

  return (
    <>
    <StyledProjectItem className="project__item">
      <span 
        className='project__item-text'
        onMouseEnter={(event) => handleMouseEnter(event, name)}
        onMouseLeave={(event) => handleMouseLeave(event, name)}
      >
        {name}
      </span>
    </StyledProjectItem>
    <StyledImages className='project__images'>
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

