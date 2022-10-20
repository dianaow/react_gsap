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

const MidgroundHero = forwardRef((props,ref) =>{
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
<svg viewBox="-85.774 -109.038 307.713 447.008" xmlns="http://www.w3.org/2000/svg">
  <linearGradient id="#3BD1C7-#2EADA1--97.42568490148966" spreadMethod="pad" gradientTransform="rotate(-97.42568490148966 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--22.23973476614605" spreadMethod="pad" gradientTransform="rotate(-22.23973476614605 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--170.2496198676287" spreadMethod="pad" gradientTransform="rotate(-170.2496198676287 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--23.002756290020038" spreadMethod="pad" gradientTransform="rotate(-23.002756290020038 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-116.01109062599703" spreadMethod="pad" gradientTransform="rotate(116.01109062599703 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--95.36347005974147" spreadMethod="pad" gradientTransform="rotate(-95.36347005974147 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--179.89149231469875" spreadMethod="pad" gradientTransform="rotate(-179.89149231469875 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--119.92151886376122" spreadMethod="pad" gradientTransform="rotate(-119.92151886376122 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-67.97907293221806" spreadMethod="pad" gradientTransform="rotate(67.97907293221806 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--152.89615472238611" spreadMethod="pad" gradientTransform="rotate(-152.89615472238611 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-1.7606331059484917" spreadMethod="pad" gradientTransform="rotate(1.7606331059484917 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-164.60226263335298" spreadMethod="pad" gradientTransform="rotate(164.60226263335298 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-36.75167936990164" spreadMethod="pad" gradientTransform="rotate(36.75167936990164 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-140.00873472090504" spreadMethod="pad" gradientTransform="rotate(140.00873472090504 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--46.22173419951376" spreadMethod="pad" gradientTransform="rotate(-46.22173419951376 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-126.11732552080858" spreadMethod="pad" gradientTransform="rotate(126.11732552080858 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--70.81376537036098" spreadMethod="pad" gradientTransform="rotate(-70.81376537036098 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-92.0046169587888" spreadMethod="pad" gradientTransform="rotate(92.0046169587888 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-153.12862335580454" spreadMethod="pad" gradientTransform="rotate(153.12862335580454 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-39.615236927207675" spreadMethod="pad" gradientTransform="rotate(39.615236927207675 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--145.10092484527058" spreadMethod="pad" gradientTransform="rotate(-145.10092484527058 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--105.5150794749726" spreadMethod="pad" gradientTransform="rotate(-105.5150794749726 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-159.54891828595348" spreadMethod="pad" gradientTransform="rotate(159.54891828595348 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-136.7433234901204" spreadMethod="pad" gradientTransform="rotate(136.7433234901204 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-14.748301866229374" spreadMethod="pad" gradientTransform="rotate(14.748301866229374 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-41.533976899186044" spreadMethod="pad" gradientTransform="rotate(41.533976899186044 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--10.981409232069868" spreadMethod="pad" gradientTransform="rotate(-10.981409232069868 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--34.131596298478534" spreadMethod="pad" gradientTransform="rotate(-34.131596298478534 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--153.83628847096062" spreadMethod="pad" gradientTransform="rotate(-153.83628847096062 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-65.32160996179253" spreadMethod="pad" gradientTransform="rotate(65.32160996179253 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--177.70141823827686" spreadMethod="pad" gradientTransform="rotate(-177.70141823827686 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-113.48591048494387" spreadMethod="pad" gradientTransform="rotate(113.48591048494387 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-89.14454375959245" spreadMethod="pad" gradientTransform="rotate(89.14454375959245 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--81.09721658106984" spreadMethod="pad" gradientTransform="rotate(-81.09721658106984 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--129.96579020606052" spreadMethod="pad" gradientTransform="rotate(-129.96579020606052 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--57.22947485212513" spreadMethod="pad" gradientTransform="rotate(-57.22947485212513 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-99.67108222824665" spreadMethod="pad" gradientTransform="rotate(99.67108222824665 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--23.50652314213561" spreadMethod="pad" gradientTransform="rotate(-23.50652314213561 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--168.69341527215477" spreadMethod="pad" gradientTransform="rotate(-168.69341527215477 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--31.356188252085406" spreadMethod="pad" gradientTransform="rotate(-31.356188252085406 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--144.27934340564056" spreadMethod="pad" gradientTransform="rotate(-144.27934340564056 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--69.34734148554251" spreadMethod="pad" gradientTransform="rotate(-69.34734148554251 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--117.20335977631697" spreadMethod="pad" gradientTransform="rotate(-117.20335977631697 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-18.551939187898267" spreadMethod="pad" gradientTransform="rotate(18.551939187898267 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-154.856871226022" spreadMethod="pad" gradientTransform="rotate(154.856871226022 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-130.15389373376206" spreadMethod="pad" gradientTransform="rotate(130.15389373376206 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-99.12718833817226" spreadMethod="pad" gradientTransform="rotate(99.12718833817226 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--51.89305315311778" spreadMethod="pad" gradientTransform="rotate(-51.89305315311778 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-3.565316742918222" spreadMethod="pad" gradientTransform="rotate(3.565316742918222 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-72.03525275601399" spreadMethod="pad" gradientTransform="rotate(72.03525275601399 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <g class="network" transform="matrix(1, 0, 0, 1, 290.178009, 236.619308)">
    <g class="links">
      <g id="path-group-33-4">
        <path class="link" id="path-33-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--97.42568490148966)" fill="url(##3BD1C7-#2EADA1--97.42568490148966)" d="M-243.14152459033116,-85.10939193437294L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-42-7">
        <path class="link" id="path-42-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--22.23973476614605)" fill="url(##2EADA1-#2EADA1--22.23973476614605)" d="M-79.29984704016842,-304.6753375968857L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-43-7">
        <path class="link" id="path-43-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--170.2496198676287)" fill="url(##3BD1C7-#2EADA1--170.2496198676287)" d="M-185.20975482046984,-293.27981638093524L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-47-4">
        <path class="link" id="path-47-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--23.002756290020038)" fill="url(##2EADA1-#2EADA1--23.002756290020038)" d="M-180.0428706738738,25.22749067548794L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-56-7">
        <path class="link" id="path-56-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-116.01109062599703)" fill="url(##3BD1C7-#2EADA1-116.01109062599703)" d="M-154.4049573813541,-234.35830499510845L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-57-7">
        <path class="link" id="path-57-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--95.36347005974147)" fill="url(##3BD1C7-#2EADA1--95.36347005974147)" d="M-135.4072373179851,-338.6570841710633L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-61-4">
        <path class="link" id="path-61-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--179.89149231469875)" fill="url(##3BD1C7-#2EADA1--179.89149231469875)" d="M-277.05871940962237,44.729188196895414L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-70-7">
        <path class="link" id="path-70-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--119.92151886376122)" fill="url(##2EADA1-#2EADA1--119.92151886376122)" d="M-158.0701090140407,-332.15779434702466L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-71-7">
        <path class="link" id="path-71-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-67.97907293221806)" fill="url(##3BD1C7-#2EADA1-67.97907293221806)" d="M-109.62036683136333,-232.80494555632467L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-75-4">
        <path class="link" id="path-75-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--152.89615472238611)" fill="url(##2EADA1-#2EADA1--152.89615472238611)" d="M-270.851405910611,21.97585921970643L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-84-7">
        <path class="link" id="path-84-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-1.7606331059484917)" fill="url(##2EADA1-#2EADA1-1.7606331059484917)" d="M-75.2385613949531,-282.1461415022338L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-85-7">
        <path class="link" id="path-85-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-164.60226263335298)" fill="url(##3BD1C7-#2EADA1-164.60226263335298)" d="M-184.01250820074722,-269.03395336724924L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-89-4">
        <path class="link" id="path-89-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-36.75167936990164)" fill="url(##2EADA1-#2EADA1-36.75167936990164)" d="M-186.02172375354172,74.83486905723484L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-98-7">
        <path class="link" id="path-98-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-140.00873472090504)" fill="url(##3BD1C7-#2EADA1-140.00873472090504)" d="M-172.44298176946106,-248.45310075653538L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-99-7">
        <path class="link" id="path-99-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--46.22173419951376)" fill="url(##3BD1C7-#2EADA1--46.22173419951376)" d="M-92.16459196639724,-323.59367468708103L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-103-4">
        <path class="link" id="path-103-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-126.11732552080858)" fill="url(##3BD1C7-#2EADA1-126.11732552080858)" d="M-256.1840863831717,85.9086556204484L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-112-7">
        <path class="link" id="path-112-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--70.81376537036098)" fill="url(##2EADA1-#2EADA1--70.81376537036098)" d="M-111.93687479495344,-336.4964977626441L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-113-7">
        <path class="link" id="path-113-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-92.0046169587888)" fill="url(##2EADA1-#2EADA1-92.0046169587888)" d="M-132.18627006569375,-228.81817393623356L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-117-4">
        <path class="link" id="path-117-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-153.12862335580454)" fill="url(##3BD1C7-#2EADA1-153.12862335580454)" d="M-270.95746558228933,67.50075093607569L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-126-7">
        <path class="link" id="path-126-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-39.615236927207675)" fill="url(##2EADA1-#2EADA1-39.615236927207675)" d="M-87.85716716727335,-248.73933580246774L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-127-7">
        <path class="link" id="path-127-7" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--145.10092484527058)" fill="url(##3BD1C7-#2EADA1--145.10092484527058)" d="M-175.98665152586483,-315.7353315355644L-130.26051619993993,-283.8374349768772"/>
      </g>
      <g id="path-group-130-33">
        <path class="link" id="path-130-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--105.5150794749726)" fill="url(##2EADA1-#3BD1C7--105.5150794749726)" d="M-264.5189450602595,-162.11517360396493L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-132-33">
        <path class="link" id="path-132-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-159.54891828595348)" fill="url(##3BD1C7-#3BD1C7-159.54891828595348)" d="M-314.79409282862963,-58.38929985297959L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-134-33">
        <path class="link" id="path-134-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-136.7433234901204)" fill="url(##2EADA1-#3BD1C7-136.7433234901204)" d="M-283.3247153177738,-47.29999361906479L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-136-33">
        <path class="link" id="path-136-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-14.748301866229374)" fill="url(##2EADA1-#3BD1C7-14.748301866229374)" d="M-175.38579549786834,-67.27294448813178L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-139-33">
        <path class="link" id="path-139-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-41.533976899186044)" fill="url(##3BD1C7-#3BD1C7-41.533976899186044)" d="M-201.16783767926594,-47.92981364882526L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-144-33">
        <path class="link" id="path-144-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--10.981409232069868)" fill="url(##2EADA1-#3BD1C7--10.981409232069868)" d="M-188.8246558208649,-95.64923272201476L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-146-33">
        <path class="link" id="path-146-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--34.131596298478534)" fill="url(##3BD1C7-#3BD1C7--34.131596298478534)" d="M-197.05297496853632,-116.35076636170145L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-148-33">
        <path class="link" id="path-148-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--153.83628847096062)" fill="url(##3BD1C7-#3BD1C7--153.83628847096062)" d="M-293.7485674541355,-109.97134384246125L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-150-33">
        <path class="link" id="path-150-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-65.32160996179253)" fill="url(##3BD1C7-#3BD1C7-65.32160996179253)" d="M-219.9242244576843,-34.58117043364986L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-153-33">
        <path class="link" id="path-153-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--177.70141823827686)" fill="url(##2EADA1-#3BD1C7--177.70141823827686)" d="M-298.24975075962215,-87.32140065049083L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-158-33">
        <path class="link" id="path-158-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-113.48591048494387)" fill="url(##2EADA1-#3BD1C7-113.48591048494387)" d="M-265.31163906070583,-34.08731200839974L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-160-33">
        <path class="link" id="path-160-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-89.14454375959245)" fill="url(##3BD1C7-#3BD1C7-89.14454375959245)" d="M-242.30044279329996,-28.78055360883396L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-162-33">
        <path class="link" id="path-162-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--81.09721658106984)" fill="url(##2EADA1-#3BD1C7--81.09721658106984)" d="M-234.6087456095727,-139.58126595828594L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-164-33">
        <path class="link" id="path-164-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--129.96579020606052)" fill="url(##3BD1C7-#3BD1C7--129.96579020606052)" d="M-278.55708230077164,-127.3672249434266L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-167-33">
        <path class="link" id="path-167-33" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--57.22947485212513)" fill="url(##2EADA1-#3BD1C7--57.22947485212513)" d="M-213.00459614730227,-131.9256252880341L-243.14152459033116,-85.10939193437294"/>
      </g>
      <g id="path-group-172-132">
        <path class="link" id="path-172-132" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-99.67108222824665)" fill="url(##2EADA1-#3BD1C7-99.67108222824665)" d="M-320.56565628300257,-24.521348850636556L-314.79409282862963,-58.38929985297959"/>
      </g>
      <g id="path-group-174-130">
        <path class="link" id="path-174-130" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--23.50652314213561)" fill="url(##2EADA1-#2EADA1--23.50652314213561)" d="M-229.92043150593275,-177.1637194601111L-264.5189450602595,-162.11517360396493"/>
      </g>
      <g id="path-group-176-130">
        <path class="link" id="path-176-130" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--168.69341527215477)" fill="url(##3BD1C7-#2EADA1--168.69341527215477)" d="M-301.5199542351106,-169.51312704852583L-264.5189450602595,-162.11517360396493"/>
      </g>
      <g id="path-group-178-136">
        <path class="link" id="path-178-136" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--31.356188252085406)" fill="url(##3BD1C7-#2EADA1--31.356188252085406)" d="M-147.5069438017481,-84.26102123042651L-175.38579549786834,-67.27294448813178"/>
      </g>
      <g id="path-group-186-132">
        <path class="link" id="path-186-132" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--144.27934340564056)" fill="url(##2EADA1-#3BD1C7--144.27934340564056)" d="M-342.12869154029136,-78.04614880122547L-314.79409282862963,-58.38929985297959"/>
      </g>
      <g id="path-group-188-130">
        <path class="link" id="path-188-130" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--69.34734148554251)" fill="url(##3BD1C7-#2EADA1--69.34734148554251)" d="M-251.21383116728845,-197.4143161336665L-264.5189450602595,-162.11517360396493"/>
      </g>
      <g id="path-group-190-130">
        <path class="link" id="path-190-130" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--117.20335977631697)" fill="url(##2EADA1-#2EADA1--117.20335977631697)" d="M-282.079018732737,-196.27845386743502L-264.5189450602595,-162.11517360396493"/>
      </g>
      <g id="path-group-192-136">
        <path class="link" id="path-192-136" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-18.551939187898267)" fill="url(##3BD1C7-#2EADA1-18.551939187898267)" d="M-145.0909424221385,-57.10588204135404L-175.38579549786834,-67.27294448813178"/>
      </g>
      <g id="path-group-ROOT-132">
        <path class="link" id="path-ROOT-132" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-154.856871226022)" fill="url(##2EADA1-#3BD1C7-154.856871226022)" d="M-350.2544649391537,-41.74588673248532L-314.79409282862963,-58.38929985297959"/>
      </g>
      <g id="path-group-1-ROOT">
        <path class="link" id="path-1-ROOT" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-130.15389373376206)" fill="url(##3BD1C7-#2EADA1-130.15389373376206)" d="M-368.9518075288789,-19.584420697634002L-350.2544649391537,-41.74588673248532"/>
      </g>
      <g id="path-group-9-4">
        <path class="link" id="path-9-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-99.12718833817226)" fill="url(##3BD1C7-#2EADA1-99.12718833817226)" d="M-234.16345935923582,94.35073171568604L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-15-4">
        <path class="link" id="path-15-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--51.89305315311778)" fill="url(##3BD1C7-#2EADA1--51.89305315311778)" d="M-195.25886570563014,5.366116158657927L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-21-4">
        <path class="link" id="path-21-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-3.565316742918222)" fill="url(##3BD1C7-#2EADA1-3.565316742918222)" d="M-176.15130172865076,47.944291987079055L-226.2066955260701,44.8254927074202"/>
      </g>
      <g id="path-group-27-4">
        <path class="link" id="path-27-4" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-72.03525275601399)" fill="url(##3BD1C7-#2EADA1-72.03525275601399)" d="M-210.7369442410691,92.53635632368008L-226.2066955260701,44.8254927074202"/>
      </g>
    </g>
    <g class="nodes">
      <g id="node-group-1" transform="translate(-375.9518075288789,-26.584420697634002)">
        <rect class="node node-rect" id="node-1" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-4" transform="translate(-248.52215941786412,22.51002881562617)">
        <rect class="node node-rect" id="node-4" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="44.630927783588064" height="44.630927783588064"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(22.315463891794032,22.315463891794032)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(22.315463891794032,22.315463891794032)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-15.939617065567166l13.804113305377133,7.969808532783583l0,15.939617065567166l-13.804113305377133,7.969808532783583l-13.804113305377133,-7.969808532783583l0,-15.939617065567166l13.804113305377133,-7.969808532783583z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-7" transform="translate(-155.385917812501,-308.96283658943827)">
        <rect class="node node-rect" id="node-7" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="50.25080322512211" height="50.25080322512211"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(25.125401612561056,25.125401612561056)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(25.125401612561056,25.125401612561056)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-17.946715437543613l15.542311483403125,8.973357718771807l0,17.946715437543613l-15.542311483403125,8.973357718771807l-15.542311483403125,-8.973357718771807l0,-17.946715437543613l15.542311483403125,-8.973357718771807z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-9" transform="translate(-234.16345935923582,94.35073171568604)">
        <circle class="node node-circle" id="node-9" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-15" transform="translate(-195.25886570563014,5.366116158657927)">
        <circle class="node node-circle" id="node-15" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-21" transform="translate(-176.15130172865076,47.944291987079055)">
        <circle class="node node-circle" id="node-21" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-27" transform="translate(-210.7369442410691,92.53635632368008)">
        <circle class="node node-circle" id="node-27" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-33" transform="translate(-243.14152459033116,-85.10939193437294)">
        <circle class="node node-circle" id="node-33" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="26.833333333333332"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-9.32562642901927,0)" opacity="1">
            <circle class="node-nested-circle" r="4.791666666666667" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(9.32562642901927,0)" opacity="1">
            <circle class="node-nested-circle" r="4.791666666666667" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,16.152458787468486)" opacity="1">
            <circle class="node-nested-circle" r="4.791666666666667" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-16.15245878746849)" opacity="1">
            <circle class="node-nested-circle" r="4.791666666666667" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-42" transform="translate(-79.29984704016842,-304.6753375968857)">
        <circle class="node node-circle" id="node-42" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-43" transform="translate(-192.20975482046984,-300.27981638093524)">
        <rect class="node node-rect" id="node-43" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-47" transform="translate(-180.0428706738738,25.22749067548794)">
        <path class="node node-hexagon" id="node-47" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-56" transform="translate(-154.4049573813541,-234.35830499510845)">
        <path class="node node-hexagon" id="node-56" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-57" transform="translate(-135.4072373179851,-338.6570841710633)">
        <circle class="node node-circle" id="node-57" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-61" transform="translate(-284.05871940962237,37.729188196895414)">
        <rect class="node node-rect" id="node-61" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-70" transform="translate(-165.0701090140407,-339.15779434702466)">
        <rect class="node node-rect" id="node-70" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-71" transform="translate(-109.62036683136333,-232.80494555632467)">
        <path class="node node-hexagon" id="node-71" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-75" transform="translate(-270.851405910611,21.97585921970643)">
        <circle class="node node-circle" id="node-75" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-84" transform="translate(-75.2385613949531,-282.1461415022338)">
        <circle class="node node-circle" id="node-84" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-85" transform="translate(-191.01250820074722,-276.03395336724924)">
        <rect class="node node-rect" id="node-85" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-89" transform="translate(-186.02172375354172,74.83486905723484)">
        <path class="node node-hexagon" id="node-89" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-98" transform="translate(-172.44298176946106,-248.45310075653538)">
        <path class="node node-hexagon" id="node-98" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-99" transform="translate(-92.16459196639724,-323.59367468708103)">
        <circle class="node node-circle" id="node-99" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-103" transform="translate(-263.1840863831717,78.9086556204484)">
        <rect class="node node-rect" id="node-103" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-112" transform="translate(-118.93687479495344,-343.4964977626441)">
        <rect class="node node-rect" id="node-112" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-113" transform="translate(-132.18627006569375,-228.81817393623356)">
        <path class="node node-hexagon" id="node-113" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-117" transform="translate(-270.95746558228933,67.50075093607569)">
        <circle class="node node-circle" id="node-117" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-126" transform="translate(-87.85716716727335,-248.73933580246774)">
        <circle class="node node-circle" id="node-126" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-127" transform="translate(-182.98665152586483,-322.7353315355644)">
        <rect class="node node-rect" id="node-127" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-130" transform="translate(-279.690727800397,-177.28695634410244)">
        <rect class="node node-rect" id="node-130" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="30.343565480275" height="30.343565480275"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(15.1717827401375,15.1717827401375)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(15.1717827401375,15.1717827401375)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-10.836987671526787l9.385106624040969,5.418493835763393l0,10.836987671526787l-9.385106624040969,5.418493835763393l-9.385106624040969,-5.418493835763393l0,-10.836987671526787l9.385106624040969,-5.418493835763393z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-132" transform="translate(-314.79409282862963,-58.38929985297959)">
        <circle class="node node-circle" id="node-132" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="13.61111111111111"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-4.528473765530448,0)" opacity="1">
            <circle class="node-nested-circle" r="2.430555555555556" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(4.528473765530446,0)" opacity="1">
            <circle class="node-nested-circle" r="2.430555555555556" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,7.843546642641488)" opacity="1">
            <circle class="node-nested-circle" r="2.430555555555556" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-7.8435466426414875)" opacity="1">
            <circle class="node-nested-circle" r="2.430555555555556" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-134" transform="translate(-283.3247153177738,-47.29999361906479)">
        <path class="node node-hexagon" id="node-134" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-136" transform="translate(-187.22546472568482,-79.11261371594824)">
        <rect class="node node-rect" id="node-136" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="23.67933845563293" height="23.67933845563293"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(11.839669227816465,11.839669227816465)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(11.839669227816465,11.839669227816465)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-8.456906591297475l7.323895945495676,4.2284532956487375l0,8.456906591297475l-7.323895945495676,4.2284532956487375l-7.323895945495676,-4.2284532956487375l0,-8.456906591297475l7.323895945495676,-4.2284532956487375z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-139" transform="translate(-208.16783767926594,-54.92981364882526)">
        <rect class="node node-rect" id="node-139" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-144" transform="translate(-188.8246558208649,-95.64923272201476)">
        <circle class="node node-circle" id="node-144" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-146" transform="translate(-197.05297496853632,-116.35076636170145)">
        <path class="node node-hexagon" id="node-146" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-148" transform="translate(-300.7485674541355,-116.97134384246125)">
        <rect class="node node-rect" id="node-148" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-150" transform="translate(-219.9242244576843,-34.58117043364986)">
        <circle class="node node-circle" id="node-150" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-153" transform="translate(-298.24975075962215,-87.32140065049083)">
        <circle class="node node-circle" id="node-153" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-158" transform="translate(-265.31163906070583,-34.08731200839974)">
        <path class="node node-hexagon" id="node-158" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-160" transform="translate(-249.30044279329996,-35.780553608833955)">
        <rect class="node node-rect" id="node-160" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-162" transform="translate(-234.6087456095727,-139.58126595828594)">
        <circle class="node node-circle" id="node-162" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-164" transform="translate(-278.55708230077164,-127.3672249434266)">
        <path class="node node-hexagon" id="node-164" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-167" transform="translate(-213.00459614730227,-131.9256252880341)">
        <path class="node node-hexagon" id="node-167" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-172" transform="translate(-327.56565628300257,-31.521348850636556)">
        <rect class="node node-rect" id="node-172" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-174" transform="translate(-229.92043150593275,-177.1637194601111)">
        <circle class="node node-circle" id="node-174" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-176" transform="translate(-301.5199542351106,-169.51312704852583)">
        <path class="node node-hexagon" id="node-176" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-178" transform="translate(-154.5069438017481,-91.26102123042651)">
        <rect class="node node-rect" id="node-178" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-186" transform="translate(-342.12869154029136,-78.04614880122547)">
        <circle class="node node-circle" id="node-186" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-188" transform="translate(-251.21383116728845,-197.4143161336665)">
        <path class="node node-hexagon" id="node-188" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-190" transform="translate(-289.079018732737,-203.27845386743502)">
        <rect class="node node-rect" id="node-190" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-192" transform="translate(-145.0909424221385,-57.10588204135404)">
        <circle class="node node-circle" id="node-192" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-ROOT" transform="translate(-359.99287682373136,-51.484298617063004)">
        <rect class="node node-rect" id="node-ROOT" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="19.47682376915537" height="19.47682376915537"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(9.738411884577685,9.738411884577685)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(5.465999789588361,9.738411884577685)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-3.4780042444920305l3.012040030200202,1.7390021222460152l0,3.4780042444920305l-3.012040030200202,1.7390021222460152l-3.012040030200202,-1.7390021222460152l0,-3.4780042444920305l3.012040030200202,-1.7390021222460152z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(14.010823979567009,9.738411884577685)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-3.4780042444920305l3.012040030200202,1.7390021222460152l0,3.4780042444920305l-3.012040030200202,1.7390021222460152l-3.012040030200202,-1.7390021222460152l0,-3.4780042444920305l3.012040030200202,-1.7390021222460152z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
  </StyledParallaxWrapper>
  )
})

export default MidgroundHero;