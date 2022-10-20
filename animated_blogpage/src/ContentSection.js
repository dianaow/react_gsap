import React from 'react'
import styled from 'styled-components'
import { SplitText } from './utils/SplitText'

const StyledContentSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .content__wrapper{
    max-width: 980px;
    h2{
      font-size: 4rem;
      line-height: 1.15;
      font-weight: 700;
      color: #acacac;
    }
    p{
      font-size: 1.6rem;
      line-height: 1.15;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #080f0f;
      padding: 20px 0px 40px 0px;
    }
  }
`

function ContentSection(props){
  return(
    <StyledContentSection>
    <div className='content__wrapper'>
      {props.animate &&
        <>
        <h2><SplitText>{props.title}</SplitText></h2>
        <p><SplitText>{props.text}</SplitText></p>
        <p><SplitText>{props.text2}</SplitText></p>
        </>
      }
      {!props.animate &&
        <>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        </>
      }
    </div>
    </StyledContentSection>
  )
}

export default ContentSection