import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const StyledCrossRevealContainer = styled.div`
  position: relative;
  padding-bottom: 5%;
  .crossRevealImage {
    width: 100%;
    height: 100%;
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
  }
  .CrossRevealImage img {
    width: 100%;
    height: auto;
  }
  .crossRevealImage img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
  }
`

function CrossRevealSection(props){
  // animate the container one way
  const containerRef = useRef()
  // and animate the image the opposite way at the same time
  const imageRef = useRef()
  // specify the point we want our animation to start
  const triggerRef = useRef()

  useEffect(() => {

    const crossRevealTween = gsap.timeline({
      defaults: {ease: "none"},
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: () => "+=" + 30,
        scrub: true,
        anticipatePin: 1
      }
    })

    // animate the container one way
    crossRevealTween
      .fromTo(containerRef.current, {xPercent: 100, x: 0}, {xPercent: 0})
      // animate the image the opposite way
      .fromTo(imageRef.current, {xPercent: -100, x: 0}, {xPercent: 0}, 0)
  }, [])

  return(
    <StyledCrossRevealContainer>
    <div className='CrossRevealImage' ref={triggerRef}>
      <img src={require('./assets/' + props.images[0])} alt=""/>
    </div>
    <div className='crossRevealImage afterImage' ref={containerRef}>
      <img src={require('./assets/' + props.images[1])} alt="" ref={imageRef}/>
    </div>
    </StyledCrossRevealContainer>
  )
}

export default CrossRevealSection