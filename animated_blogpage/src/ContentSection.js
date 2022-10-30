import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from './utils/SplitText'

gsap.registerPlugin(ScrollTrigger)

const StyledTextSection = styled.div`
  position: relative;
  width: 100vw;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
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
      color: #000000;
      padding: 20px 0px 20px 0px;
    }
    li {
      padding: 10px 0px 10px 0px;
    }
  }
`

const StyledGridSection = styled.section`
  position: relative;
  width: 100vw;
  .box__wrapper{
    width: 100%;
    justify-content: center;
    align-items: center;
    display: grid;
    .box-image {
      padding: 0em;
    }
    .box-image img {
      width: 100%;
    }
  }
`

function ContentSection(props){
  const textSectionTriggerRef = useRef()
  const gridSectionTriggerRef = useRef()
  const gridWrapperRef = useRef()

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
          scale: 1.5,
          transformOrigin: "center top",
        },
        {
          scale: 1.1,
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
        {!props.animate &&
          <>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
          </>
        }
        {props.animate &&
          <>
          <h2><SplitText>{props.title}</SplitText></h2>
          <h3><SplitText>{props.subtitle}</SplitText></h3>
          </>
        }
        {props.texts && props.texts.map((p) => {
          return(<p>{p}</p>)
        })}
        {props.lists && 
        <ol>
          {props.lists && props.lists.map((l) => {
            return(<li>{l}</li>)
          })}
        </ol>
        }
        {props.texts2 && props.texts2.map((p) => {
          return(<p>{p}</p>)
        })}
      </div>
    </StyledTextSection>
    <StyledGridSection ref={gridSectionTriggerRef}>
      <div ref={gridWrapperRef} className="box__wrapper" style={{'grid-template-columns': `repeat(${props.images && props.images.length}, 1fr)`}}>
        {props.images && props.images.map((d,i) => {
          return(<div className="box-image">
            <img alt="" src={require('./assets/' + d)} />
          </div> ) 
        })}
      </div>
    </StyledGridSection>
    </>
  )
}

export default ContentSection