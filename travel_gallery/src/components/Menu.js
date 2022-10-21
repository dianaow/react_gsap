import React from "react"
import MenuItems from "./MenuItems"
import styled from "styled-components"

const projects = [
  {
    id: 1,
    name: 'London',
    images: []
  },
  {
    id: 2,
    name: 'Amsterdam',
    images: []
  },
  {
    id: 3,
    name: 'Paris',
    images: []
  },
  {
    id: 4,
    name: 'Osaka',
    images: []
  },
  {
    id: 5,
    name: 'Kyoto',
    images: []
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
  return (
    <StyledProjectsContainer>
      <div className='project__wrapper'>
        {projects.map((project) => (
          <MenuItems
            key={project.id}
            name={project.name}
            images={project.images}
          ></MenuItems>
        ))}
      </div>
    </StyledProjectsContainer>
  )
}

export default Menu