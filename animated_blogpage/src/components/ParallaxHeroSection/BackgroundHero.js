import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from 'styled-components'
import { gsap } from "gsap"

const StyledParallaxWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
` 

const BackgroundHero = forwardRef((props,ref) =>{
  const el = useRef()

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x,y) {
          gsap.to(el.current, {x,y})
        }
      }
    },
    []
  )

  return (
  <StyledParallaxWrapper ref={el}>
<svg transform="translate(-240, -50)scale(0.85)" viewBox="251.525 -9.802 441.778 393.197" xmlns="http://www.w3.org/2000/svg">
  <linearGradient id="#3BD1C7-#3BD1C7--7.082217861714349" spreadMethod="pad" gradientTransform="rotate(-7.082217861714349 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--100.60735433047353" spreadMethod="pad" gradientTransform="rotate(-100.60735433047353 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-78.68702446209066" spreadMethod="pad" gradientTransform="rotate(78.68702446209066 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--70.05998912942668" spreadMethod="pad" gradientTransform="rotate(-70.05998912942668 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-39.21149678404345" spreadMethod="pad" gradientTransform="rotate(39.21149678404345 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-151.7056472229771" spreadMethod="pad" gradientTransform="rotate(151.7056472229771 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--3.0748781949562822" spreadMethod="pad" gradientTransform="rotate(-3.0748781949562822 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--75.578909083099" spreadMethod="pad" gradientTransform="rotate(-75.578909083099 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--89.62039700646531" spreadMethod="pad" gradientTransform="rotate(-89.62039700646531 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-29.236782539751452" spreadMethod="pad" gradientTransform="rotate(29.236782539751452 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--163.05394481312544" spreadMethod="pad" gradientTransform="rotate(-163.05394481312544 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--30.550744568834443" spreadMethod="pad" gradientTransform="rotate(-30.550744568834443 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-95.942747098662" spreadMethod="pad" gradientTransform="rotate(95.942747098662 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-2.9165235256405833" spreadMethod="pad" gradientTransform="rotate(2.9165235256405833 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--38.53150027045395" spreadMethod="pad" gradientTransform="rotate(-38.53150027045395 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--103.48223776214557" spreadMethod="pad" gradientTransform="rotate(-103.48223776214557 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-15.780780990011364" spreadMethod="pad" gradientTransform="rotate(15.780780990011364 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-116.74876172416673" spreadMethod="pad" gradientTransform="rotate(116.74876172416673 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--122.04838397959134" spreadMethod="pad" gradientTransform="rotate(-122.04838397959134 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--131.41069118993744" spreadMethod="pad" gradientTransform="rotate(-131.41069118993744 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-121.39039914777504" spreadMethod="pad" gradientTransform="rotate(121.39039914777504 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--37.35608156193638" spreadMethod="pad" gradientTransform="rotate(-37.35608156193638 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-101.643879562273" spreadMethod="pad" gradientTransform="rotate(101.643879562273 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--117.97813044288306" spreadMethod="pad" gradientTransform="rotate(-117.97813044288306 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-37.02925488296059" spreadMethod="pad" gradientTransform="rotate(37.02925488296059 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--60.34248712883489" spreadMethod="pad" gradientTransform="rotate(-60.34248712883489 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--110.78635410236565" spreadMethod="pad" gradientTransform="rotate(-110.78635410236565 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-117.33784120388614" spreadMethod="pad" gradientTransform="rotate(117.33784120388614 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--140.7252174554931" spreadMethod="pad" gradientTransform="rotate(-140.7252174554931 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-62.86863866136317" spreadMethod="pad" gradientTransform="rotate(62.86863866136317 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--170.33497922628612" spreadMethod="pad" gradientTransform="rotate(-170.33497922628612 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-24.268476026443185" spreadMethod="pad" gradientTransform="rotate(24.268476026443185 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--28.191190347356365" spreadMethod="pad" gradientTransform="rotate(-28.191190347356365 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--137.64223595222518" spreadMethod="pad" gradientTransform="rotate(-137.64223595222518 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-86.72656377762326" spreadMethod="pad" gradientTransform="rotate(86.72656377762326 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-174.16337455554054" spreadMethod="pad" gradientTransform="rotate(174.16337455554054 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--58.6342876161395" spreadMethod="pad" gradientTransform="rotate(-58.6342876161395 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--173.38273513729132" spreadMethod="pad" gradientTransform="rotate(-173.38273513729132 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-65.89307213922639" spreadMethod="pad" gradientTransform="rotate(65.89307213922639 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-76.01392456214927" spreadMethod="pad" gradientTransform="rotate(76.01392456214927 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-134.3286549550777" spreadMethod="pad" gradientTransform="rotate(134.3286549550777 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--74.75392882723906" spreadMethod="pad" gradientTransform="rotate(-74.75392882723906 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--53.81433772528016" spreadMethod="pad" gradientTransform="rotate(-53.81433772528016 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-161.2177200044573" spreadMethod="pad" gradientTransform="rotate(161.2177200044573 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--114.89207504240959" spreadMethod="pad" gradientTransform="rotate(-114.89207504240959 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--127.6392045865893" spreadMethod="pad" gradientTransform="rotate(-127.6392045865893 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--8.819881566207355" spreadMethod="pad" gradientTransform="rotate(-8.819881566207355 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-109.25941504580042" spreadMethod="pad" gradientTransform="rotate(109.25941504580042 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--42.989900935368745" spreadMethod="pad" gradientTransform="rotate(-42.989900935368745 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-23.38187578445275" spreadMethod="pad" gradientTransform="rotate(23.38187578445275 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-56.01104101276185" spreadMethod="pad" gradientTransform="rotate(56.01104101276185 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--95.71298248318571" spreadMethod="pad" gradientTransform="rotate(-95.71298248318571 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--102.37533316219059" spreadMethod="pad" gradientTransform="rotate(-102.37533316219059 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--143.67329968208637" spreadMethod="pad" gradientTransform="rotate(-143.67329968208637 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--60.60630357266833" spreadMethod="pad" gradientTransform="rotate(-60.60630357266833 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--15.621989319713059" spreadMethod="pad" gradientTransform="rotate(-15.621989319713059 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-131.60124968149267" spreadMethod="pad" gradientTransform="rotate(131.60124968149267 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-165.4455963364496" spreadMethod="pad" gradientTransform="rotate(165.4455963364496 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-148.08571516197745" spreadMethod="pad" gradientTransform="rotate(148.08571516197745 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-109.4956245262753" spreadMethod="pad" gradientTransform="rotate(109.4956245262753 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--17.618347768543988" spreadMethod="pad" gradientTransform="rotate(-17.618347768543988 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--151.88552129710567" spreadMethod="pad" gradientTransform="rotate(-151.88552129710567 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-44.775048219398684" spreadMethod="pad" gradientTransform="rotate(44.775048219398684 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <g class="network" transform="matrix(1, 0, 0, 1, 302.60144, 325.577332)">
    <g class="links">
      <g id="path-group-31-0">
        <path class="link" id="path-31-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--7.082217861714349)" fill="url(##3BD1C7-#3BD1C7--7.082217861714349)" d="M69.70841958015552,-204.2726619250814L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-35-2">
        <path class="link" id="path-35-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--100.60735433047353)" fill="url(##2EADA1-#3BD1C7--100.60735433047353)" d="M175.0449731067249,-177.3576965022201L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-37-2">
        <path class="link" id="path-37-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-78.68702446209066)" fill="url(##3BD1C7-#3BD1C7-78.68702446209066)" d="M211.41723248360924,10.045582372479464L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-39-8">
        <path class="link" id="path-39-8" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--70.05998912942668)" fill="url(##3BD1C7-#2EADA1--70.05998912942668)" d="M362.42543248027516,-73.59298442516526L348.55738782617465,-35.36636102408063"/>
      </g>
      <g id="path-group-40-0">
        <path class="link" id="path-40-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-39.21149678404345)" fill="url(##3BD1C7-#3BD1C7-39.21149678404345)" d="M57.162954712632136,-160.75387642560364L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-44-0">
        <path class="link" id="path-44-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-151.7056472229771)" fill="url(##2EADA1-#3BD1C7-151.7056472229771)" d="M-37.332110500811346,-170.326296033988L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-45-5">
        <path class="link" id="path-45-5" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--3.0748781949562822)" fill="url(##2EADA1-#3BD1C7--3.0748781949562822)" d="M209.61067992413226,-296.95528743858824L171.13289857653973,-294.8883252729192"/>
      </g>
      <g id="path-group-49-2">
        <path class="link" id="path-49-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--75.578909083099)" fill="url(##2EADA1-#3BD1C7--75.578909083099)" d="M210.79341565279427,-165.0539015564301L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-51-2">
        <path class="link" id="path-51-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--89.62039700646531)" fill="url(##2EADA1-#3BD1C7--89.62039700646531)" d="M191.84767139782008,-150.9820745066026L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-53-8">
        <path class="link" id="path-53-8" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-29.236782539751452)" fill="url(##2EADA1-#2EADA1-29.236782539751452)" d="M384.0330311044174,-15.509795306808645L348.55738782617465,-35.36636102408063"/>
      </g>
      <g id="path-group-54-0">
        <path class="link" id="path-54-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--163.05394481312544)" fill="url(##3BD1C7-#3BD1C7--163.05394481312544)" d="M-41.894237952003806,-213.75270316640442L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-58-0">
        <path class="link" id="path-58-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--30.550744568834443)" fill="url(##3BD1C7-#3BD1C7--30.550744568834443)" d="M62.15505837236852,-226.45846246146596L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-59-5">
        <path class="link" id="path-59-5" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-95.942747098662)" fill="url(##2EADA1-#3BD1C7-95.942747098662)" d="M167.14432385153393,-256.5712966242519L171.13289857653973,-294.8883252729192"/>
      </g>
      <g id="path-group-63-2">
        <path class="link" id="path-63-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-2.9165235256405833)" fill="url(##3BD1C7-#3BD1C7-2.9165235256405833)" d="M253.26052738711516,-86.65193669698242L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-65-2">
        <path class="link" id="path-65-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--38.53150027045395)" fill="url(##3BD1C7-#3BD1C7--38.53150027045395)" d="M239.66765744199006,-128.2048561170721L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-67-8">
        <path class="link" id="path-67-8" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--103.48223776214557)" fill="url(##2EADA1-#2EADA1--103.48223776214557)" d="M338.9149563435855,-75.58490141194615L348.55738782617465,-35.36636102408063"/>
      </g>
      <g id="path-group-68-0">
        <path class="link" id="path-68-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-15.780780990011364)" fill="url(##3BD1C7-#3BD1C7-15.780780990011364)" d="M67.28794095520486,-181.69441717545806L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-72-0">
        <path class="link" id="path-72-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-116.74876172416673)" fill="url(##3BD1C7-#3BD1C7-116.74876172416673)" d="M-12.850132481301124,-146.80918927178752L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-73-5">
        <path class="link" id="path-73-5" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--122.04838397959134)" fill="url(##2EADA1-#3BD1C7--122.04838397959134)" d="M150.31610976601274,-328.1396358123047L171.13289857653973,-294.8883252729192"/>
      </g>
      <g id="path-group-77-2">
        <path class="link" id="path-77-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--131.41069118993744)" fill="url(##3BD1C7-#3BD1C7--131.41069118993744)" d="M148.37574240496633,-138.63246195517863L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-79-2">
        <path class="link" id="path-79-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-121.39039914777504)" fill="url(##2EADA1-#3BD1C7-121.39039914777504)" d="M149.05411392459376,-20.332176887970657L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-81-8">
        <path class="link" id="path-81-8" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--37.35608156193638)" fill="url(##2EADA1-#2EADA1--37.35608156193638)" d="M380.8741806582915,-60.03518614412535L348.55738782617465,-35.36636102408063"/>
      </g>
      <g id="path-group-82-0">
        <path class="link" id="path-82-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-101.643879562273)" fill="url(##3BD1C7-#3BD1C7-101.643879562273)" d="M-2.1654835711498532,-125.84614441334271L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-86-0">
        <path class="link" id="path-86-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--117.97813044288306)" fill="url(##3BD1C7-#3BD1C7--117.97813044288306)" d="M-14.160904423051242,-247.41713957988662L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-87-5">
        <path class="link" id="path-87-5" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-37.02925488296059)" fill="url(##3BD1C7-#3BD1C7-37.02925488296059)" d="M201.89269405484103,-271.68452314030594L171.13289857653973,-294.8883252729192"/>
      </g>
      <g id="path-group-91-2">
        <path class="link" id="path-91-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--60.34248712883489)" fill="url(##3BD1C7-#3BD1C7--60.34248712883489)" d="M222.26702406593148,-143.93607423386953L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-93-2">
        <path class="link" id="path-93-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--110.78635410236565)" fill="url(##2EADA1-#3BD1C7--110.78635410236565)" d="M169.76667529560123,-146.9038970127973L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-95-8">
        <path class="link" id="path-95-8" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-117.33784120388614)" fill="url(##2EADA1-#2EADA1-117.33784120388614)" d="M329.8836154649913,0.7548560514211666L348.55738782617465,-35.36636102408063"/>
      </g>
      <g id="path-group-96-0">
        <path class="link" id="path-96-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--140.7252174554931)" fill="url(##3BD1C7-#3BD1C7--140.7252174554931)" d="M-31.51946229131918,-233.19224839947375L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-100-0">
        <path class="link" id="path-100-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-62.86863866136317)" fill="url(##2EADA1-#3BD1C7-62.86863866136317)" d="M38.79679218406539,-145.91212019024573L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-101-5">
        <path class="link" id="path-101-5" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--170.33497922628612)" fill="url(##2EADA1-#3BD1C7--170.33497922628612)" d="M133.14220636394487,-301.35832461728165L171.13289857653973,-294.8883252729192"/>
      </g>
      <g id="path-group-105-2">
        <path class="link" id="path-105-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-24.268476026443185)" fill="url(##2EADA1-#3BD1C7-24.268476026443185)" d="M247.87463326476762,-64.35859026011983L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-107-2">
        <path class="link" id="path-107-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--28.191190347356365)" fill="url(##3BD1C7-#3BD1C7--28.191190347356365)" d="M262.30213207561064,-127.78205494724573L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-109-8">
        <path class="link" id="path-109-8" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--137.64223595222518)" fill="url(##2EADA1-#2EADA1--137.64223595222518)" d="M318.00014000254316,-63.227683229666596L348.55738782617465,-35.36636102408063"/>
      </g>
      <g id="path-group-110-0">
        <path class="link" id="path-110-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-86.72656377762326)" fill="url(##3BD1C7-#3BD1C7-86.72656377762326)" d="M15.761802234183818,-140.69710648285206L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-114-0">
        <path class="link" id="path-114-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-174.16337455554054)" fill="url(##2EADA1-#3BD1C7-174.16337455554054)" d="M-44.076114837247424,-191.38237618406222L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-115-5">
        <path class="link" id="path-115-5" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--58.6342876161395)" fill="url(##2EADA1-#3BD1C7--58.6342876161395)" d="M191.54863931385867,-328.3797297631317L171.13289857653973,-294.8883252729192"/>
      </g>
      <g id="path-group-119-2">
        <path class="link" id="path-119-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--173.38273513729132)" fill="url(##2EADA1-#3BD1C7--173.38273513729132)" d="M129.97820804742534,-96.93179588452378L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-121-2">
        <path class="link" id="path-121-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-65.89307213922639)" fill="url(##3BD1C7-#3BD1C7-65.89307213922639)" d="M216.70153537946896,-33.35202342483215L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-123-8">
        <path class="link" id="path-123-8" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-76.01392456214927)" fill="url(##2EADA1-#2EADA1-76.01392456214927)" d="M358.38457219674575,4.08916977745975L348.55738782617465,-35.36636102408063"/>
      </g>
      <g id="path-group-124-0">
        <path class="link" id="path-124-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-134.3286549550777)" fill="url(##2EADA1-#3BD1C7-134.3286549550777)" d="M-36.309860949738514,-147.16898859433527L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-128-0">
        <path class="link" id="path-128-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--74.75392882723906)" fill="url(##3BD1C7-#3BD1C7--74.75392882723906)" d="M34.42390304275239,-277.48952838662143L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-129-0">
        <path class="link" id="path-129-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--53.81433772528016)" fill="url(##2EADA1-#3BD1C7--53.81433772528016)" d="M45.814405803538484,-242.6676035180566L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-140-37">
        <path class="link" id="path-140-37" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-161.2177200044573)" fill="url(##3BD1C7-#3BD1C7-161.2177200044573)" d="M171.24513400138582,23.70741770932018L211.41723248360924,10.045582372479464"/>
      </g>
      <g id="path-group-141-37">
        <path class="link" id="path-141-37" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--114.89207504240959)" fill="url(##2EADA1-#3BD1C7--114.89207504240959)" d="M193.60469232014168,-28.342152953774136L211.41723248360924,10.045582372479464"/>
      </g>
      <g id="path-group-143-35">
        <path class="link" id="path-143-35" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--127.6392045865893)" fill="url(##3BD1C7-#2EADA1--127.6392045865893)" d="M156.2311681639752,-201.7533708725011L175.0449731067249,-177.3576965022201"/>
      </g>
      <g id="path-group-154-37">
        <path class="link" id="path-154-37" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--8.819881566207355)" fill="url(##2EADA1-#3BD1C7--8.819881566207355)" d="M254.0440646786565,3.4314533395369766L211.41723248360924,10.045582372479464"/>
      </g>
      <g id="path-group-155-37">
        <path class="link" id="path-155-37" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-109.25941504580042)" fill="url(##2EADA1-#3BD1C7-109.25941504580042)" d="M197.41618497581027,50.11726876259475L211.41723248360924,10.045582372479464"/>
      </g>
      <g id="path-group-157-35">
        <path class="link" id="path-157-35" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--42.989900935368745)" fill="url(##2EADA1-#2EADA1--42.989900935368745)" d="M198.04116682977076,-198.79441723165087L175.0449731067249,-177.3576965022201"/>
      </g>
      <g id="path-group-168-37">
        <path class="link" id="path-168-37" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-23.38187578445275)" fill="url(##3BD1C7-#3BD1C7-23.38187578445275)" d="M250.388382909957,26.89527095439326L211.41723248360924,10.045582372479464"/>
      </g>
      <g id="path-group-169-37">
        <path class="link" id="path-169-37" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-56.01104101276185)" fill="url(##2EADA1-#3BD1C7-56.01104101276185)" d="M235.53843660577675,45.82160726465289L211.41723248360924,10.045582372479464"/>
      </g>
      <g id="path-group-170-0">
        <path class="link" id="path-170-0" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--95.71298248318571)" fill="url(##2EADA1-#3BD1C7--95.71298248318571)" d="M6.917434393755381,-253.29022140798784L12.531923059707301,-197.16897253829194"/>
      </g>
      <g id="path-group-179-128">
        <path class="link" id="path-179-128" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--102.37533316219059)" fill="url(##2EADA1-#3BD1C7--102.37533316219059)" d="M26.659584892367775,-312.8763062798664L34.42390304275239,-277.48952838662143"/>
      </g>
      <g id="path-group-183-128">
        <path class="link" id="path-183-128" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--143.67329968208637)" fill="url(##2EADA1-#3BD1C7--143.67329968208637)" d="M5.241645270373918,-298.94697228160595L34.42390304275239,-277.48952838662143"/>
      </g>
      <g id="path-group-193-128">
        <path class="link" id="path-193-128" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--60.60630357266833)" fill="url(##2EADA1-#3BD1C7--60.60630357266833)" d="M52.54494324821582,-309.6574683202505L34.42390304275239,-277.48952838662143"/>
      </g>
      <g id="path-group-197-128">
        <path class="link" id="path-197-128" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--15.621989319713059)" fill="url(##2EADA1-#3BD1C7--15.621989319713059)" d="M69.32019294621317,-287.24718588522586L34.42390304275239,-277.48952838662143"/>
      </g>
      <g id="path-group-11-2">
        <path class="link" id="path-11-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-131.60124968149267)" fill="url(##2EADA1-#3BD1C7-131.60124968149267)" d="M150.72716348880786,-43.94481151357083L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-13-2">
        <path class="link" id="path-13-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-165.4455963364496)" fill="url(##3BD1C7-#3BD1C7-165.4455963364496)" d="M131.05936584533546,-74.12410606950047L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-17-2">
        <path class="link" id="path-17-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-148.08571516197745)" fill="url(##3BD1C7-#3BD1C7-148.08571516197745)" d="M129.09485010574878,-50.97193103307293L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-19-2">
        <path class="link" id="path-19-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-109.4956245262753)" fill="url(##3BD1C7-#3BD1C7-109.4956245262753)" d="M170.65956840466245,-31.098448573319992L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-23-2">
        <path class="link" id="path-23-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--17.618347768543988)" fill="url(##3BD1C7-#3BD1C7--17.618347768543988)" d="M250.18461738263434,-108.45624474533392L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-25-2">
        <path class="link" id="path-25-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--151.88552129710567)" fill="url(##3BD1C7-#3BD1C7--151.88552129710567)" d="M136.28204918883839,-119.27214475244611L191.44232369709005,-89.80138555973225"/>
      </g>
      <g id="path-group-29-2">
        <path class="link" id="path-29-2" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-44.775048219398684)" fill="url(##3BD1C7-#3BD1C7-44.775048219398684)" d="M235.37369617263,-46.21362801467768L191.44232369709005,-89.80138555973225"/>
      </g>
    </g>
    <g class="nodes">
      <g id="node-group-0" transform="translate(12.531923059707301,-197.16897253829194)">
        <circle class="node node-circle" id="node-0" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="27.647198302694534"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-9.622108495795679,0)" opacity="1">
            <circle class="node-nested-circle" r="4.936999696909738" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(9.622108495795679,0)" opacity="1">
            <circle class="node-nested-circle" r="4.936999696909738" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,16.66598079065826)" opacity="1">
            <circle class="node-nested-circle" r="4.936999696909738" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-16.66598079065826)" opacity="1">
            <circle class="node-nested-circle" r="4.936999696909738" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-2" transform="translate(191.44232369709005,-89.80138555973225)">
        <path class="node node-hexagon" id="node-2" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-33.75328658165108l29.231203640926253,16.87664329082554l0,33.75328658165108l-29.231203640926253,16.87664329082554l-29.231203640926253,-16.87664329082554l0,-33.75328658165108l29.231203640926253,-16.87664329082554z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-14.648904753367706,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-10.958859279756844l9.490650532768262,5.479429639878422l0,10.958859279756844l-9.490650532768262,5.479429639878422l-9.490650532768262,-5.479429639878422l0,-10.958859279756844l9.490650532768262,-5.479429639878422z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(14.648904753367706,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-10.958859279756844l9.490650532768262,5.479429639878422l0,10.958859279756844l-9.490650532768262,5.479429639878422l-9.490650532768262,-5.479429639878422l0,-10.958859279756844l9.490650532768262,-5.479429639878422z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-5" transform="translate(171.13289857653973,-294.8883252729192)">
        <path class="node node-hexagon" id="node-5" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-18.241011518351l15.797179365616522,9.1205057591755l0,18.241011518351l-15.797179365616522,9.1205057591755l-15.797179365616522,-9.1205057591755l0,-18.241011518351l15.797179365616522,-9.1205057591755z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-7.63962521365983,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5.922406337126949l5.128954339485884,2.9612031685634745l0,5.922406337126949l-5.128954339485884,2.9612031685634745l-5.128954339485884,-2.9612031685634745l0,-5.922406337126949l5.128954339485884,-2.9612031685634745z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(7.63962521365983,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5.922406337126949l5.128954339485884,2.9612031685634745l0,5.922406337126949l-5.128954339485884,2.9612031685634745l-5.128954339485884,-2.9612031685634745l0,-5.922406337126949l5.128954339485884,-2.9612031685634745z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-8" transform="translate(348.55738782617465,-35.36636102408063)">
        <path class="node node-hexagon" id="node-8" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-19.66826925657527l17.03322082466666,9.834134628287636l0,19.66826925657527l-17.03322082466666,9.834134628287636l-17.03322082466666,-9.834134628287636l0,-19.66826925657527l17.03322082466666,-9.834134628287636z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-8.282123247063351,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-6.385801706680283l5.5302665015151495,3.1929008533401415l0,6.385801706680283l-5.5302665015151495,3.1929008533401415l-5.5302665015151495,-3.1929008533401415l0,-6.385801706680283l5.5302665015151495,-3.1929008533401415z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(8.282123247063353,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-6.385801706680283l5.5302665015151495,3.1929008533401415l0,6.385801706680283l-5.5302665015151495,3.1929008533401415l-5.5302665015151495,-3.1929008533401415l0,-6.385801706680283l5.5302665015151495,-3.1929008533401415z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-11" transform="translate(150.72716348880786,-43.94481151357083)">
        <path class="node node-hexagon" id="node-11" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-13" transform="translate(124.05936584533546,-81.12410606950047)">
        <rect class="node node-rect" id="node-13" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-17" transform="translate(129.09485010574878,-50.97193103307293)">
        <path class="node node-hexagon" id="node-17" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-19" transform="translate(163.65956840466245,-38.09844857331999)">
        <rect class="node node-rect" id="node-19" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-23" transform="translate(250.18461738263434,-108.45624474533392)">
        <path class="node node-hexagon" id="node-23" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-25" transform="translate(129.28204918883839,-126.27214475244611)">
        <rect class="node node-rect" id="node-25" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-29" transform="translate(235.37369617263,-46.21362801467768)">
        <path class="node node-hexagon" id="node-29" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-31" transform="translate(62.70841958015552,-211.2726619250814)">
        <rect class="node node-rect" id="node-31" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-35" transform="translate(175.0449731067249,-177.3576965022201)">
        <path class="node node-hexagon" id="node-35" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-13.023636150598113l11.278799756063343,6.511818075299057l0,13.023636150598113l-11.278799756063343,6.511818075299057l-11.278799756063343,-6.511818075299057l0,-13.023636150598113l11.278799756063343,-6.511818075299057z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-5.300590768057368,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-4.2284532956487375l3.661947972747838,2.1142266478243688l0,4.2284532956487375l-3.661947972747838,2.1142266478243688l-3.661947972747838,-2.1142266478243688l0,-4.2284532956487375l3.661947972747838,-2.1142266478243688z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(5.3005907680573685,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-4.2284532956487375l3.661947972747838,2.1142266478243688l0,4.2284532956487375l-3.661947972747838,2.1142266478243688l-3.661947972747838,-2.1142266478243688l0,-4.2284532956487375l3.661947972747838,-2.1142266478243688z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-37" transform="translate(193.53698770490445,-7.834662406225329)">
        <rect class="node node-rect" id="node-37" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="35.760489557409585" height="35.760489557409585"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(17.880244778704792,17.880244778704792)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(17.880244778704792,17.880244778704792)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-12.771603413360566l11.060533003030299,6.385801706680283l0,12.771603413360566l-11.060533003030299,6.385801706680283l-11.060533003030299,-6.385801706680283l0,-12.771603413360566l11.060533003030299,-6.385801706680283z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-39" transform="translate(362.42543248027516,-73.59298442516526)">
        <circle class="node node-circle" id="node-39" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-40" transform="translate(50.162954712632136,-167.75387642560364)">
        <rect class="node node-rect" id="node-40" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-44" transform="translate(-37.332110500811346,-170.326296033988)">
        <path class="node node-hexagon" id="node-44" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-45" transform="translate(209.61067992413226,-296.95528743858824)">
        <circle class="node node-circle" id="node-45" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-49" transform="translate(203.79341565279427,-172.0539015564301)">
        <rect class="node node-rect" id="node-49" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-51" transform="translate(191.84767139782008,-150.9820745066026)">
        <circle class="node node-circle" id="node-51" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-53" transform="translate(384.0330311044174,-15.509795306808645)">
        <path class="node node-hexagon" id="node-53" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-54" transform="translate(-41.894237952003806,-213.75270316640442)">
        <circle class="node node-circle" id="node-54" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-58" transform="translate(55.15505837236852,-233.45846246146596)">
        <rect class="node node-rect" id="node-58" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-59" transform="translate(167.14432385153393,-256.5712966242519)">
        <path class="node node-hexagon" id="node-59" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-63" transform="translate(253.26052738711516,-86.65193669698242)">
        <circle class="node node-circle" id="node-63" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-65" transform="translate(239.66765744199006,-128.2048561170721)">
        <path class="node node-hexagon" id="node-65" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-67" transform="translate(331.9149563435855,-82.58490141194615)">
        <rect class="node node-rect" id="node-67" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-68" transform="translate(67.28794095520486,-181.69441717545806)">
        <path class="node node-hexagon" id="node-68" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-72" transform="translate(-12.850132481301124,-146.80918927178752)">
        <circle class="node node-circle" id="node-72" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-73" transform="translate(143.31610976601274,-335.1396358123047)">
        <rect class="node node-rect" id="node-73" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-77" transform="translate(148.37574240496633,-138.63246195517863)">
        <path class="node node-hexagon" id="node-77" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-79" transform="translate(142.05411392459376,-27.332176887970657)">
        <rect class="node node-rect" id="node-79" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-81" transform="translate(380.8741806582915,-60.03518614412535)">
        <circle class="node node-circle" id="node-81" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-82" transform="translate(-9.165483571149853,-132.8461444133427)">
        <rect class="node node-rect" id="node-82" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-86" transform="translate(-14.160904423051242,-247.41713957988662)">
        <path class="node node-hexagon" id="node-86" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-87" transform="translate(201.89269405484103,-271.68452314030594)">
        <circle class="node node-circle" id="node-87" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-91" transform="translate(215.26702406593148,-150.93607423386953)">
        <rect class="node node-rect" id="node-91" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-93" transform="translate(169.76667529560123,-146.9038970127973)">
        <circle class="node node-circle" id="node-93" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-95" transform="translate(329.8836154649913,0.7548560514211666)">
        <path class="node node-hexagon" id="node-95" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-96" transform="translate(-31.51946229131918,-233.19224839947375)">
        <circle class="node node-circle" id="node-96" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-100" transform="translate(31.79679218406539,-152.91212019024573)">
        <rect class="node node-rect" id="node-100" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-101" transform="translate(133.14220636394487,-301.35832461728165)">
        <path class="node node-hexagon" id="node-101" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-105" transform="translate(247.87463326476762,-64.35859026011983)">
        <circle class="node node-circle" id="node-105" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-107" transform="translate(262.30213207561064,-127.78205494724573)">
        <path class="node node-hexagon" id="node-107" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-109" transform="translate(311.00014000254316,-70.2276832296666)">
        <rect class="node node-rect" id="node-109" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-110" transform="translate(15.761802234183818,-140.69710648285206)">
        <path class="node node-hexagon" id="node-110" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-114" transform="translate(-44.076114837247424,-191.38237618406222)">
        <circle class="node node-circle" id="node-114" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-115" transform="translate(184.54863931385867,-335.3797297631317)">
        <rect class="node node-rect" id="node-115" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-119" transform="translate(129.97820804742534,-96.93179588452378)">
        <path class="node node-hexagon" id="node-119" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-121" transform="translate(209.70153537946896,-40.35202342483215)">
        <rect class="node node-rect" id="node-121" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-123" transform="translate(358.38457219674575,4.08916977745975)">
        <circle class="node node-circle" id="node-123" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-124" transform="translate(-43.309860949738514,-154.16898859433527)">
        <rect class="node node-rect" id="node-124" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-128" transform="translate(34.42390304275239,-277.48952838662143)">
        <path class="node node-hexagon" id="node-128" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-16.68896101415125l14.45306420102309,8.344480507075625l0,16.68896101415125l-14.45306420102309,8.344480507075625l-14.45306420102309,-8.344480507075625l0,-16.68896101415125l14.45306420102309,-8.344480507075625z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-6.9419927197498605,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5.418493835763393l4.692553312020484,2.7092469178816967l0,5.418493835763393l-4.692553312020484,2.7092469178816967l-4.692553312020484,-2.7092469178816967l0,-5.418493835763393l4.692553312020484,-2.7092469178816967z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(6.9419927197498605,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5.418493835763393l4.692553312020484,2.7092469178816967l0,5.418493835763393l-4.692553312020484,2.7092469178816967l-4.692553312020484,-2.7092469178816967l0,-5.418493835763393l4.692553312020484,-2.7092469178816967z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-129" transform="translate(45.814405803538484,-242.6676035180566)">
        <circle class="node node-circle" id="node-129" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-140" transform="translate(171.24513400138582,23.70741770932018)">
        <path class="node node-hexagon" id="node-140" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-141" transform="translate(193.60469232014168,-28.342152953774136)">
        <circle class="node node-circle" id="node-141" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-143" transform="translate(156.2311681639752,-201.7533708725011)">
        <path class="node node-hexagon" id="node-143" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-154" transform="translate(247.0440646786565,-3.5685466604630234)">
        <rect class="node node-rect" id="node-154" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-155" transform="translate(197.41618497581027,50.11726876259475)">
        <path class="node node-hexagon" id="node-155" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-157" transform="translate(191.04116682977076,-205.79441723165087)">
        <rect class="node node-rect" id="node-157" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-168" transform="translate(250.388382909957,26.89527095439326)">
        <circle class="node node-circle" id="node-168" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-169" transform="translate(228.53843660577675,38.82160726465289)">
        <rect class="node node-rect" id="node-169" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-170" transform="translate(6.917434393755381,-253.29022140798784)">
        <path class="node node-hexagon" id="node-170" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-179" transform="translate(26.659584892367775,-312.8763062798664)">
        <path class="node node-hexagon" id="node-179" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-183" transform="translate(5.241645270373918,-298.94697228160595)">
        <circle class="node node-circle" id="node-183" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.1726322311328428,0)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,3.7631094104838123)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-3.7631094104838128)" opacity="1">
            <circle class="node-nested-circle" r="1.25" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-193" transform="translate(45.54494324821582,-316.6574683202505)">
        <rect class="node node-rect" id="node-193" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-197" transform="translate(69.32019294621317,-287.24718588522586)">
        <path class="node node-hexagon" id="node-197" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(2.947368421052632,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-2.5l2.1650635094610964,1.25l0,2.5l-2.1650635094610964,1.25l-2.1650635094610964,-1.25l0,-2.5l2.1650635094610964,-1.25z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
  </StyledParallaxWrapper>
  )
})

export default BackgroundHero;