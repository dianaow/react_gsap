import React from 'react'
import styled from 'styled-components'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const StyledPanelSection = styled.div`
  background: #000000;
  width: 100%;
  position: relative;
  .panel__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .panel__container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    .panel__text {
      flex: 0 0 30%;
      max-width: 50%;
      p{
        font-size: 1.8rem;
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: -0.015em;
        color: #ffffff;
        padding: 20px 0px;
      }
      h2{
        font-size: 4rem;
        line-height: 1.15;
        font-weight: 700;
        color: #ffffff;
      }
      .panel__button {
        display: inline-block;
        padding: 1em 2em;
        margin: 4em 0.5em 0.5em 0;
        border-radius: 2em;
        text-decoration: none;
        font-weight: 400;
        color: #000000;
        background-color: #ffffff;
        text-align: center;
        transition: all 0.6s;
        &:hover {
          background-color: #acacac 
        }
      }
    }
    .panel__img img {
      width: 100%;
      padding: 0px 0px 0px 80px;
    }
  }
`

function SidePanelSection(props){
  return(
    <StyledPanelSection>
      <div className='panel__wrapper'>
        <div className='panel__container'>
          <div className='panel__text'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <a href={props.url} className="panel__button">Explore</a>
          </div>   
          <div className="panel__img">
            <img className='img' alt="" src={require('./assets/' + props.asset)} />
          </div>     
        </div>      
      </div>
    </StyledPanelSection>
  )
}

export default SidePanelSection