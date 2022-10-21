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

const MenuItems = ({name, images}) => {

  useLayoutEffect(() => {
    const getAllProjectItems = gsap.utils.toArray(".project__item")
    gsap.set(getAllProjectItems, {opacity: 0, y: 200})
    gsap.to(getAllProjectItems, {
      opacity: 1,
      stagger: 0.1,
      y: 0
    })
  }, [])

  return (
    <StyledProjectItem className="project__item">
      <span className='project__item-text'>
        {name}
      </span>
    </StyledProjectItem>
  )
}

export default MenuItems

