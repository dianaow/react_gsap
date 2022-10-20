import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import ForegroundHero from './ForegroundHero'
import BackgroundHero from './BackgroundHero'

const StyledSVGWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
`

function ParallaxHeroSection () {
  const foregroundHeroRef = useRef()
  const backgroundHeroRef = useRef()

  useEffect(()=>{
    const onMove = ({ clientX, clientY }) => {
      foregroundHeroRef.current.moveTo(clientX / 10, clientY / 10)
      backgroundHeroRef.current.moveTo(-clientX / 10, -clientY / 10)
    }

    const onLeave = () => {
      foregroundHeroRef.current.moveTo(0, 0)
      backgroundHeroRef.current.moveTo(0, 0)
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      document.addEventListener("mousemove", onMove)
      document.addEventListener("mouseleave", onLeave)    
    }
  }, [])

  return (
    <StyledSVGWrapper>
    <ForegroundHero ref={foregroundHeroRef}/>
    <BackgroundHero ref={backgroundHeroRef}/>
    </StyledSVGWrapper>
  )
}

export default ParallaxHeroSection