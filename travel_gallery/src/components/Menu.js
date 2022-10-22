import React, {useRef} from "react"
import MenuItems from "./MenuItems"
import styled from "styled-components"

const projects = [
  {
    id: 1,
    name: 'London',
    images: ['london1.jpg', 'london2.jpg', 'london3.jpg', 'london4.jpg', 'london5.jpg', 'london6.jpg']
  },
  {
    id: 2,
    name: 'Amsterdam',
    images: ['amsterdam1.jpg', 'amsterdam2.jpg', 'amsterdam3.jpg']
  },
  {
    id: 3,
    name: 'Paris',
    images: ['paris1.jpg', 'paris2.jpg', 'paris3.jpg', 'paris4.jpg', 'paris5.jpg', 'paris6.jpg']
  },
  {
    id: 4,
    name: 'Osaka',
    images: ['osaka1.jpg', 'osaka2.jpg', 'osaka3.jpg', 'osaka4.jpg', 'osaka5.jpg', 'osaka6.jpg']
  },
  {
    id: 5,
    name: 'Kyoto',
    images: ['kyoto1.jpg', 'kyoto2.jpg', 'kyoto3.jpg', 'kyoto4.jpg']
  }
]

const StyledProjectsContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .project__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

const Menu = () => {
  const projectsRef = useRef()
  return (
    <StyledProjectsContainer>
      <div className='project__wrapper' ref={projectsRef}>
        {projects.map((project) => (
          <MenuItems
            key={project.id}
            name={project.name}
            images={project.images}
            projectsRef={projectsRef}
          ></MenuItems>
        ))}
      </div>
    </StyledProjectsContainer>
  )
}

export default Menu