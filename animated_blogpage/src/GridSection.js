import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const StyledTextSection = styled.div`
  position: relative;
  width: 100vw;
  background: #acacac;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  .content__wrapper{
    max-width: 980px;
    h2{
      font-size: 4rem;
      line-height: 1.15;
      font-weight: 700;
      color: #000000;
      padding-top: 40px;
    }
    h3{
      font-size: 3rem;
      line-height: 1.15;
      font-weight: 500;
      color: #000000;
    }
    p{
      font-size: 1.6rem;
      line-height: 1.15;
      font-weight: 500;
      letter-spacing: -0.015em;
      color: #ffffff;
      padding: 20px 0px 40px 0px;
    }
  }
`

const StyledGridSection = styled.section`
  position: relative;
  width: 100vw;
  background: #acacac;
  .box__wrapper{
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .box-image {
      padding: 1em;
    }
    .box-image img {
      width: 100%;
    }
  }
`

function GridSection(props){
  const textSectionTriggerRef = useRef()
  const gridSectionTriggerRef = useRef()
  const gridWrapperRef = useRef()
  const box1Ref = useRef()
  const box2Ref = useRef()
  const box3Ref = useRef()

  useEffect(() => {
    const scaleDownTween = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: textSectionTriggerRef.current,
        start: "bottom bottom",
        scrub: true
      }
    })
    scaleDownTween
      .fromTo(
        gridWrapperRef.current,
        {
          scale: 2.2,
          transformOrigin: "center top",
        },
        {
          scale: 1.2,
          y: "-10%"
        }
      )
      .to(
        gridWrapperRef.current, {
          scale: 1,
          y: 0
        }
      )
  }, [])

  return(
    <>
    <StyledTextSection ref={textSectionTriggerRef}>
      <div className='content__wrapper'>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.text}</p>
        <p>{props.text2}</p>
      </div>
    </StyledTextSection>
    <StyledGridSection ref={gridSectionTriggerRef}>
      <div ref={gridWrapperRef} className="box__wrapper">
        <div ref={box1Ref} className="box-image">
          <img className='box1' alt="" src={require('./assets/' + props.images[0])} />
        </div>
        <div ref={box2Ref} className="box-image">
          <img className='box2' alt="" src={require('./assets/' + props.images[1])} />
        </div>
        <div ref={box3Ref} className="box-image">
          <img className='box3' alt="" src={require('./assets/' + props.images[2])} />
        </div>
      </div>
    </StyledGridSection>
    </>
  )
}

export default GridSection