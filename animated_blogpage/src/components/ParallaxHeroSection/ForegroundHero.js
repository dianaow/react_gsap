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

const ForegroundHero = forwardRef((props,ref) =>{
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
<svg transform="translate(260, 0)" viewBox="-47.5 279.215 636.914 282.548" xmlns="http://www.w3.org/2000/svg">
  <linearGradient id="#3BD1C7-#2EADA1-153.87981779622265" spreadMethod="pad" gradientTransform="rotate(153.87981779622265 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--5.28699745122238" spreadMethod="pad" gradientTransform="rotate(-5.28699745122238 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--74.89763462629685" spreadMethod="pad" gradientTransform="rotate(-74.89763462629685 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--127.55137707020414" spreadMethod="pad" gradientTransform="rotate(-127.55137707020414 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--141.95057017514918" spreadMethod="pad" gradientTransform="rotate(-141.95057017514918 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--156.1313050658603" spreadMethod="pad" gradientTransform="rotate(-156.1313050658603 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-117.0102838322089" spreadMethod="pad" gradientTransform="rotate(117.0102838322089 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-66.58890059432895" spreadMethod="pad" gradientTransform="rotate(66.58890059432895 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--45.92714252936886" spreadMethod="pad" gradientTransform="rotate(-45.92714252936886 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-20.71015089009767" spreadMethod="pad" gradientTransform="rotate(20.71015089009767 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-19.035180778252656" spreadMethod="pad" gradientTransform="rotate(19.035180778252656 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--106.4585977294225" spreadMethod="pad" gradientTransform="rotate(-106.4585977294225 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-148.04572846981102" spreadMethod="pad" gradientTransform="rotate(148.04572846981102 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-101.64953892839038" spreadMethod="pad" gradientTransform="rotate(101.64953892839038 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-112.68713673761478" spreadMethod="pad" gradientTransform="rotate(112.68713673761478 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-78.69737191553926" spreadMethod="pad" gradientTransform="rotate(78.69737191553926 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-8.95342412572304" spreadMethod="pad" gradientTransform="rotate(8.95342412572304 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--61.03299391597649" spreadMethod="pad" gradientTransform="rotate(-61.03299391597649 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--151.8312608779429" spreadMethod="pad" gradientTransform="rotate(-151.8312608779429 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--132.22844076317145" spreadMethod="pad" gradientTransform="rotate(-132.22844076317145 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--104.18780606510656" spreadMethod="pad" gradientTransform="rotate(-104.18780606510656 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-137.30389683376376" spreadMethod="pad" gradientTransform="rotate(137.30389683376376 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-49.94330136001497" spreadMethod="pad" gradientTransform="rotate(49.94330136001497 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--37.76933813443447" spreadMethod="pad" gradientTransform="rotate(-37.76933813443447 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-30.710157275714458" spreadMethod="pad" gradientTransform="rotate(30.710157275714458 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--1.7973534889875793" spreadMethod="pad" gradientTransform="rotate(-1.7973534889875793 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--118.39269878706743" spreadMethod="pad" gradientTransform="rotate(-118.39269878706743 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-172.70300859742412" spreadMethod="pad" gradientTransform="rotate(172.70300859742412 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-78.56277889869125" spreadMethod="pad" gradientTransform="rotate(78.56277889869125 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-132.15154801748514" spreadMethod="pad" gradientTransform="rotate(132.15154801748514 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-100.57301298790516" spreadMethod="pad" gradientTransform="rotate(100.57301298790516 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-55.063433689386684" spreadMethod="pad" gradientTransform="rotate(55.063433689386684 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--30.760757409124988" spreadMethod="pad" gradientTransform="rotate(-30.760757409124988 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--93.55408565239078" spreadMethod="pad" gradientTransform="rotate(-93.55408565239078 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--88.82279826236035" spreadMethod="pad" gradientTransform="rotate(-88.82279826236035 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-0.16844795316082284" spreadMethod="pad" gradientTransform="rotate(0.16844795316082284 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-120.70859426204477" spreadMethod="pad" gradientTransform="rotate(120.70859426204477 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--167.70777549839787" spreadMethod="pad" gradientTransform="rotate(-167.70777549839787 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--86.86234542876305" spreadMethod="pad" gradientTransform="rotate(-86.86234542876305 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-117.64850097654667" spreadMethod="pad" gradientTransform="rotate(117.64850097654667 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--97.92586939774775" spreadMethod="pad" gradientTransform="rotate(-97.92586939774775 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-49.664310538339215" spreadMethod="pad" gradientTransform="rotate(49.664310538339215 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-87.39914878538606" spreadMethod="pad" gradientTransform="rotate(87.39914878538606 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-54.70227731629033" spreadMethod="pad" gradientTransform="rotate(54.70227731629033 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--168.4762295890931" spreadMethod="pad" gradientTransform="rotate(-168.4762295890931 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--25.759182285314516" spreadMethod="pad" gradientTransform="rotate(-25.759182285314516 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--145.9997884730999" spreadMethod="pad" gradientTransform="rotate(-145.9997884730999 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--9.164160481266977" spreadMethod="pad" gradientTransform="rotate(-9.164160481266977 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--131.68882072038258" spreadMethod="pad" gradientTransform="rotate(-131.68882072038258 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-155.1225152898749" spreadMethod="pad" gradientTransform="rotate(155.1225152898749 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--127.24909485059905" spreadMethod="pad" gradientTransform="rotate(-127.24909485059905 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-54.49119395979377" spreadMethod="pad" gradientTransform="rotate(54.49119395979377 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--108.89924054000058" spreadMethod="pad" gradientTransform="rotate(-108.89924054000058 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-134.81401652483015" spreadMethod="pad" gradientTransform="rotate(134.81401652483015 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-52.88881087362579" spreadMethod="pad" gradientTransform="rotate(52.88881087362579 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-108.12532006346781" spreadMethod="pad" gradientTransform="rotate(108.12532006346781 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-25.657754428167685" spreadMethod="pad" gradientTransform="rotate(25.657754428167685 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7--160.4362563856027" spreadMethod="pad" gradientTransform="rotate(-160.4362563856027 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7--122.87038020515638" spreadMethod="pad" gradientTransform="rotate(-122.87038020515638 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-139.0731553290442" spreadMethod="pad" gradientTransform="rotate(139.0731553290442 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--0.9933913329070039" spreadMethod="pad" gradientTransform="rotate(-0.9933913329070039 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--54.93856227933253" spreadMethod="pad" gradientTransform="rotate(-54.93856227933253 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--82.22539394687891" spreadMethod="pad" gradientTransform="rotate(-82.22539394687891 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--27.64264527373396" spreadMethod="pad" gradientTransform="rotate(-27.64264527373396 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--135.61255313255813" spreadMethod="pad" gradientTransform="rotate(-135.61255313255813 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-123.65766400379592" spreadMethod="pad" gradientTransform="rotate(123.65766400379592 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#3BD1C7-161.235431620822" spreadMethod="pad" gradientTransform="rotate(161.235431620822 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#3BD1C7-88.65066567843138" spreadMethod="pad" gradientTransform="rotate(88.65066567843138 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#3BD1C7"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-80.7775049130462" spreadMethod="pad" gradientTransform="rotate(80.7775049130462 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-124.87885024872523" spreadMethod="pad" gradientTransform="rotate(124.87885024872523 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--80.13474674464989" spreadMethod="pad" gradientTransform="rotate(-80.13474674464989 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-179.74729061026622" spreadMethod="pad" gradientTransform="rotate(179.74729061026622 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-89.85621574549246" spreadMethod="pad" gradientTransform="rotate(89.85621574549246 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1-36.2899655033996" spreadMethod="pad" gradientTransform="rotate(36.2899655033996 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--16.36468674492247" spreadMethod="pad" gradientTransform="rotate(-16.36468674492247 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--166.1628067892501" spreadMethod="pad" gradientTransform="rotate(-166.1628067892501 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-164.1455519341327" spreadMethod="pad" gradientTransform="rotate(164.1455519341327 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1-63.4681279543712" spreadMethod="pad" gradientTransform="rotate(63.4681279543712 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#3BD1C7-#2EADA1--24.246943704373553" spreadMethod="pad" gradientTransform="rotate(-24.246943704373553 0.5 0.5)">
    <stop offset="0" stop-color="#3BD1C7"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <linearGradient id="#2EADA1-#2EADA1--66.28939168437836" spreadMethod="pad" gradientTransform="rotate(-66.28939168437836 0.5 0.5)">
    <stop offset="0" stop-color="#2EADA1"/>
    <stop offset="0.15" stop-color="#FC83FB"/>
    <stop offset="0.9" stop-color="#2EADA1"/>
  </linearGradient>
  <g class="network" transform="matrix(1, 0, 0, 1, 290.178009, 236.619308)">
    <g class="links">
      <g id="path-group-32-3">
        <path class="link" id="path-32-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-153.87981779622265)" fill="url(##3BD1C7-#2EADA1-153.87981779622265)" d="M-100.41367190274623,237.09099220471577L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-34-3">
        <path class="link" id="path-34-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--5.28699745122238)" fill="url(##3BD1C7-#2EADA1--5.28699745122238)" d="M139.11909648688442,168.6343790040426L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-36-3">
        <path class="link" id="path-36-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--74.89763462629685)" fill="url(##2EADA1-#2EADA1--74.89763462629685)" d="M38.339236647164576,97.08531386834889L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-38-3">
        <path class="link" id="path-38-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--127.55137707020414)" fill="url(##3BD1C7-#2EADA1--127.55137707020414)" d="M-57.87571791828797,83.99230493390696L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-41-3">
        <path class="link" id="path-41-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--141.95057017514918)" fill="url(##2EADA1-#2EADA1--141.95057017514918)" d="M-64.40046560593102,117.13959022650032L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-46-3">
        <path class="link" id="path-46-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--156.1313050658603)" fill="url(##2EADA1-#2EADA1--156.1313050658603)" d="M-82.83222480615551,136.31992301364764L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-48-3">
        <path class="link" id="path-48-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-117.0102838322089)" fill="url(##3BD1C7-#2EADA1-117.0102838322089)" d="M-22.99126688491017,256.4340134771266L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-50-3">
        <path class="link" id="path-50-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-66.58890059432895)" fill="url(##2EADA1-#2EADA1-66.58890059432895)" d="M58.88503792377941,279.1848086852537L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-52-3">
        <path class="link" id="path-52-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--45.92714252936886)" fill="url(##3BD1C7-#2EADA1--45.92714252936886)" d="M76.25371182832426,117.74921460911222L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-55-3">
        <path class="link" id="path-55-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-20.71015089009767)" fill="url(##3BD1C7-#2EADA1-20.71015089009767)" d="M96.72354255960153,210.5680722401261L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-60-3">
        <path class="link" id="path-60-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-19.035180778252656)" fill="url(##3BD1C7-#2EADA1-19.035180778252656)" d="M124.47981606713914,217.4744694247152L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-62-3">
        <path class="link" id="path-62-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--106.4585977294225)" fill="url(##2EADA1-#2EADA1--106.4585977294225)" d="M-15.13030718344192,74.81078352610216L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-64-3">
        <path class="link" id="path-64-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-148.04572846981102)" fill="url(##3BD1C7-#2EADA1-148.04572846981102)" d="M-57.52758734461328,225.86722671244405L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-66-3">
        <path class="link" id="path-66-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-101.64953892839038)" fill="url(##3BD1C7-#2EADA1-101.64953892839038)" d="M-1.3736256318520415,264.0807135226831L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-69-3">
        <path class="link" id="path-69-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-112.68713673761478)" fill="url(##2EADA1-#2EADA1-112.68713673761478)" d="M-25.50238661040672,279.20112088993034L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-74-3">
        <path class="link" id="path-74-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-78.69737191553926)" fill="url(##2EADA1-#2EADA1-78.69737191553926)" d="M37.3544363881652,287.1005107477687L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-76-3">
        <path class="link" id="path-76-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-8.95342412572304)" fill="url(##3BD1C7-#2EADA1-8.95342412572304)" d="M116.32532368187545,195.8452748389924L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-78-3">
        <path class="link" id="path-78-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--61.03299391597649)" fill="url(##3BD1C7-#2EADA1--61.03299391597649)" d="M57.57285614046764,104.84891217135743L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-80-3">
        <path class="link" id="path-80-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--151.8312608779429)" fill="url(##3BD1C7-#2EADA1--151.8312608779429)" d="M-59.36077164096286,139.70077646900768L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-83-3">
        <path class="link" id="path-83-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--132.22844076317145)" fill="url(##2EADA1-#2EADA1--132.22844076317145)" d="M-41.596009988061724,116.62526892246213L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-88-3">
        <path class="link" id="path-88-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--104.18780606510656)" fill="url(##2EADA1-#2EADA1--104.18780606510656)" d="M-5.211769412639978,96.30705187369288L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-90-3">
        <path class="link" id="path-90-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-137.30389683376376)" fill="url(##3BD1C7-#2EADA1-137.30389683376376)" d="M-62.516960415693255,252.4336423696664L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-92-3">
        <path class="link" id="path-92-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-49.94330136001497)" fill="url(##2EADA1-#2EADA1-49.94330136001497)" d="M76.17940249479055,251.66049853613328L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-94-3">
        <path class="link" id="path-94-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--37.76933813443447)" fill="url(##3BD1C7-#2EADA1--37.76933813443447)" d="M100.10408588755979,114.83107494273622L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-97-3">
        <path class="link" id="path-97-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-30.710157275714458)" fill="url(##3BD1C7-#2EADA1-30.710157275714458)" d="M109.38388275092322,235.52826940745072L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-102-3">
        <path class="link" id="path-102-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--1.7973534889875793)" fill="url(##3BD1C7-#2EADA1--1.7973534889875793)" d="M101.48814563201148,177.34775054115178L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-104-3">
        <path class="link" id="path-104-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--118.39269878706743)" fill="url(##3BD1C7-#2EADA1--118.39269878706743)" d="M-27.939726838442976,98.82566492233498L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-106-3">
        <path class="link" id="path-106-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-172.70300859742412)" fill="url(##3BD1C7-#2EADA1-172.70300859742412)" d="M-89.38823762673582,193.52092997041026L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-108-3">
        <path class="link" id="path-108-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-78.56277889869125)" fill="url(##3BD1C7-#2EADA1-78.56277889869125)" d="M32.94557078577386,264.01457459774196L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-111-3">
        <path class="link" id="path-111-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-132.15154801748514)" fill="url(##3BD1C7-#2EADA1-132.15154801748514)" d="M-41.36994708399229,243.35980787254948L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-116-3">
        <path class="link" id="path-116-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-100.57301298790516)" fill="url(##2EADA1-#2EADA1-100.57301298790516)" d="M-4.167539426200409,287.83582372147566L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-118-3">
        <path class="link" id="path-118-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-55.063433689386684)" fill="url(##3BD1C7-#2EADA1-55.063433689386684)" d="M82.04292342693141,274.63803807767306L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-120-3">
        <path class="link" id="path-120-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--30.760757409124988)" fill="url(##2EADA1-#2EADA1--30.760757409124988)" d="M89.69863244292306,136.14012026728489L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-122-3">
        <path class="link" id="path-122-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--93.55408565239078)" fill="url(##3BD1C7-#2EADA1--93.55408565239078)" d="M9.289700648099554,72.7194847922406L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-125-3">
        <path class="link" id="path-125-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--88.82279826236035)" fill="url(##3BD1C7-#2EADA1--88.82279826236035)" d="M17.719945743815888,94.13640826170193L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-131-34">
        <path class="link" id="path-131-34" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-0.16844795316082284)" fill="url(##2EADA1-#3BD1C7-0.16844795316082284)" d="M242.9980347115398,168.93978099148669L139.11909648688442,168.6343790040426"/>
      </g>
      <g id="path-group-133-32">
        <path class="link" id="path-133-32" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-120.70859426204477)" fill="url(##3BD1C7-#3BD1C7-120.70859426204477)" d="M-129.5387856291438,286.12651788705926L-100.41367190274623,237.09099220471577"/>
      </g>
      <g id="path-group-135-32">
        <path class="link" id="path-135-32" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--167.70777549839787)" fill="url(##3BD1C7-#3BD1C7--167.70777549839787)" d="M-159.59843449805612,224.1950405074701L-100.41367190274623,237.09099220471577"/>
      </g>
      <g id="path-group-137-38">
        <path class="link" id="path-137-38" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--86.86234542876305)" fill="url(##3BD1C7-#3BD1C7--86.86234542876305)" d="M-56.028583231110936,50.29605084987136L-57.87571791828797,83.99230493390696"/>
      </g>
      <g id="path-group-138-30">
        <path class="link" id="path-138-30" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-117.64850097654667)" fill="url(##3BD1C7-#2EADA1-117.64850097654667)" d="M-317.4570666555651,213.17721130044177L-300.6488805858589,181.09229703456916"/>
      </g>
      <g id="path-group-142-30">
        <path class="link" id="path-142-30" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--97.92586939774775)" fill="url(##2EADA1-#2EADA1--97.92586939774775)" d="M-305.73831029108396,144.5359996363947L-300.6488805858589,181.09229703456916"/>
      </g>
      <g id="path-group-145-34">
        <path class="link" id="path-145-34" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-49.664310538339215)" fill="url(##3BD1C7-#3BD1C7-49.664310538339215)" d="M162.3054056970406,195.94023758616103L139.11909648688442,168.6343790040426"/>
      </g>
      <g id="path-group-147-32">
        <path class="link" id="path-147-32" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-87.39914878538606)" fill="url(##3BD1C7-#3BD1C7-87.39914878538606)" d="M-98.56766694910183,277.7298549134389L-100.41367190274623,237.09099220471577"/>
      </g>
      <g id="path-group-149-32">
        <path class="link" id="path-149-32" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-54.70227731629033)" fill="url(##3BD1C7-#3BD1C7-54.70227731629033)" d="M-76.90113250133255,270.30174132890846L-100.41367190274623,237.09099220471577"/>
      </g>
      <g id="path-group-151-38">
        <path class="link" id="path-151-38" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--168.4762295890931)" fill="url(##2EADA1-#3BD1C7--168.4762295890931)" d="M-91.5903306239082,77.11842200590209L-57.87571791828797,83.99230493390696"/>
      </g>
      <g id="path-group-152-30">
        <path class="link" id="path-152-30" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--25.759182285314516)" fill="url(##2EADA1-#2EADA1--25.759182285314516)" d="M-268.0241921538789,165.34957000394107L-300.6488805858589,181.09229703456916"/>
      </g>
      <g id="path-group-156-30">
        <path class="link" id="path-156-30" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--145.9997884730999)" fill="url(##3BD1C7-#2EADA1--145.9997884730999)" d="M-330.6777535752376,160.83740515194503L-300.6488805858589,181.09229703456916"/>
      </g>
      <g id="path-group-159-34">
        <path class="link" id="path-159-34" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--9.164160481266977)" fill="url(##2EADA1-#3BD1C7--9.164160481266977)" d="M173.77471882447034,163.04363709272627L139.11909648688442,168.6343790040426"/>
      </g>
      <g id="path-group-161-32">
        <path class="link" id="path-161-32" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--131.68882072038258)" fill="url(##2EADA1-#3BD1C7--131.68882072038258)" d="M-127.46314709418823,206.7193978759099L-100.41367190274623,237.09099220471577"/>
      </g>
      <g id="path-group-163-32">
        <path class="link" id="path-163-32" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-155.1225152898749)" fill="url(##2EADA1-#3BD1C7-155.1225152898749)" d="M-137.91090478709384,254.4787213925768L-100.41367190274623,237.09099220471577"/>
      </g>
      <g id="path-group-165-38">
        <path class="link" id="path-165-38" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--127.24909485059905)" fill="url(##3BD1C7-#3BD1C7--127.24909485059905)" d="M-78.30509384372542,57.125430861331054L-57.87571791828797,83.99230493390696"/>
      </g>
      <g id="path-group-166-30">
        <path class="link" id="path-166-30" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-54.49119395979377)" fill="url(##3BD1C7-#2EADA1-54.49119395979377)" d="M-279.20883701798203,211.14035982939322L-300.6488805858589,181.09229703456916"/>
      </g>
      <g id="path-group-171-131">
        <path class="link" id="path-171-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--108.89924054000058)" fill="url(##2EADA1-#2EADA1--108.89924054000058)" d="M226.95088391841574,122.06786161700924L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-173-131">
        <path class="link" id="path-173-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-134.81401652483015)" fill="url(##2EADA1-#2EADA1-134.81401652483015)" d="M208.08052126644395,204.08471963605402L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-175-131">
        <path class="link" id="path-175-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-52.88881087362579)" fill="url(##2EADA1-#2EADA1-52.88881087362579)" d="M273.32449686309405,209.02227946403306L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-177-131">
        <path class="link" id="path-177-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-108.12532006346781)" fill="url(##2EADA1-#2EADA1-108.12532006346781)" d="M227.58102006030188,216.03770475029975L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-180-131">
        <path class="link" id="path-180-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-25.657754428167685)" fill="url(##3BD1C7-#2EADA1-25.657754428167685)" d="M287.68355091688716,190.40490299470852L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-181-135">
        <path class="link" id="path-181-135" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7--160.4362563856027)" fill="url(##3BD1C7-#3BD1C7--160.4362563856027)" d="M-194.43503968166084,211.81511730053566L-159.59843449805612,224.1950405074701"/>
      </g>
      <g id="path-group-182-135">
        <path class="link" id="path-182-135" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7--122.87038020515638)" fill="url(##2EADA1-#3BD1C7--122.87038020515638)" d="M-179.2759655510615,193.74370225502693L-159.59843449805612,224.1950405074701"/>
      </g>
      <g id="path-group-184-133">
        <path class="link" id="path-184-133" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-139.0731553290442)" fill="url(##2EADA1-#3BD1C7-139.0731553290442)" d="M-154.27340028030773,307.5726059963527L-129.5387856291438,286.12651788705926"/>
      </g>
      <g id="path-group-185-131">
        <path class="link" id="path-185-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--0.9933913329070039)" fill="url(##3BD1C7-#2EADA1--0.9933913329070039)" d="M292.56824585648735,168.08024904484517L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-187-131">
        <path class="link" id="path-187-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--54.93856227933253)" fill="url(##3BD1C7-#2EADA1--54.93856227933253)" d="M271.8713033022102,127.79844398730332L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-189-131">
        <path class="link" id="path-189-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--82.22539394687891)" fill="url(##2EADA1-#2EADA1--82.22539394687891)" d="M249.70175832282234,119.83957040508217L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-191-131">
        <path class="link" id="path-191-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--27.64264527373396)" fill="url(##2EADA1-#2EADA1--27.64264527373396)" d="M286.91619238241987,145.93828456973844L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-194-131">
        <path class="link" id="path-194-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--135.61255313255813)" fill="url(##2EADA1-#2EADA1--135.61255313255813)" d="M207.6002337057882,134.2908826156515L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-195-135">
        <path class="link" id="path-195-135" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-123.65766400379592)" fill="url(##3BD1C7-#3BD1C7-123.65766400379592)" d="M-179.69862775333436,254.38230655022426L-159.59843449805612,224.1950405074701"/>
      </g>
      <g id="path-group-196-135">
        <path class="link" id="path-196-135" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#3BD1C7-161.235431620822)" fill="url(##2EADA1-#3BD1C7-161.235431620822)" d="M-194.6131898245047,236.0908781449346L-159.59843449805612,224.1950405074701"/>
      </g>
      <g id="path-group-198-133">
        <path class="link" id="path-198-133" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#3BD1C7-88.65066567843138)" fill="url(##3BD1C7-#3BD1C7-88.65066567843138)" d="M-128.7846313432243,318.14368989476566L-129.5387856291438,286.12651788705926"/>
      </g>
      <g id="path-group-199-131">
        <path class="link" id="path-199-131" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-80.7775049130462)" fill="url(##3BD1C7-#2EADA1-80.7775049130462)" d="M251.05284121536206,218.54824157756005L242.9980347115398,168.93978099148669"/>
      </g>
      <g id="path-group-6-3">
        <path class="link" id="path-6-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-124.87885024872523)" fill="url(##2EADA1-#2EADA1-124.87885024872523)" d="M-44.1441515143174,266.2495438219106L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-10-3">
        <path class="link" id="path-10-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--80.13474674464989)" fill="url(##2EADA1-#2EADA1--80.13474674464989)" d="M34.395585667610646,73.99169869377727L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-12-3">
        <path class="link" id="path-12-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-179.74729061026622)" fill="url(##3BD1C7-#2EADA1-179.74729061026622)" d="M-69.67960404159732,180.4094896472192L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-14-3">
        <path class="link" id="path-14-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-89.85621574549246)" fill="url(##3BD1C7-#2EADA1-89.85621574549246)" d="M16.202503491972678,278.7029050143577L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-16-3">
        <path class="link" id="path-16-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1-36.2899655033996)" fill="url(##3BD1C7-#2EADA1-36.2899655033996)" d="M85.47740152502652,231.08240737935424L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-18-3">
        <path class="link" id="path-18-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--16.36468674492247)" fill="url(##2EADA1-#2EADA1--16.36468674492247)" d="M98.50584816678118,155.7909936853934L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-20-3">
        <path class="link" id="path-20-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--166.1628067892501)" fill="url(##3BD1C7-#2EADA1--166.1628067892501)" d="M-72.99282336619774,158.12290051054572L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-22-3">
        <path class="link" id="path-22-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-164.1455519341327)" fill="url(##2EADA1-#2EADA1-164.1455519341327)" d="M-67.31534922191227,203.680379360028L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-24-3">
        <path class="link" id="path-24-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1-63.4681279543712)" fill="url(##2EADA1-#2EADA1-63.4681279543712)" d="M54.19499028219281,256.62284321176514L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-26-3">
        <path class="link" id="path-26-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##3BD1C7-#2EADA1--24.246943704373553)" fill="url(##3BD1C7-#2EADA1--24.246943704373553)" d="M112.08485175736246,136.73456334050053L15.95488694709167,180.03178677849894"/>
      </g>
      <g id="path-group-28-3">
        <path class="link" id="path-28-3" stroke-width="4.666666666666667" opacity="1" stroke="url(##2EADA1-#2EADA1--66.28939168437836)" fill="url(##2EADA1-#2EADA1--66.28939168437836)" d="M59.24335487861008,81.46749196494551L15.95488694709167,180.03178677849894"/>
      </g>
    </g>
    <g class="nodes">
      <g id="node-group-3" transform="translate(15.95488694709167,180.03178677849894)">
        <circle class="node node-circle" id="node-3" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="45.22762599955038"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-16.03814056750555,0)" opacity="1">
            <circle class="node-nested-circle" r="8.076361785633997" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(16.03814056750555,0)" opacity="1">
            <circle class="node-nested-circle" r="8.076361785633997" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,27.778874321851163)" opacity="1">
            <circle class="node-nested-circle" r="8.076361785633997" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-27.778874321851156)" opacity="1">
            <circle class="node-nested-circle" r="8.076361785633997" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-6" transform="translate(-44.1441515143174,266.2495438219106)">
        <circle class="node node-circle" id="node-6" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-10" transform="translate(27.395585667610646,66.99169869377727)">
        <rect class="node node-rect" id="node-10" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-12" transform="translate(-69.67960404159732,180.4094896472192)">
        <circle class="node node-circle" id="node-12" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-14" transform="translate(16.202503491972678,278.7029050143577)">
        <path class="node node-hexagon" id="node-14" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-16" transform="translate(78.47740152502652,224.08240737935424)">
        <rect class="node node-rect" id="node-16" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-18" transform="translate(98.50584816678118,155.7909936853934)">
        <circle class="node node-circle" id="node-18" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-20" transform="translate(-72.99282336619774,158.12290051054572)">
        <path class="node node-hexagon" id="node-20" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-22" transform="translate(-74.31534922191227,196.680379360028)">
        <rect class="node node-rect" id="node-22" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-24" transform="translate(54.19499028219281,256.62284321176514)">
        <circle class="node node-circle" id="node-24" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-26" transform="translate(112.08485175736246,136.73456334050053)">
        <path class="node node-hexagon" id="node-26" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-28" transform="translate(52.24335487861008,74.46749196494551)">
        <rect class="node node-rect" id="node-28" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-30" transform="translate(-300.6488805858589,181.09229703456916)">
        <circle class="node node-circle" id="node-30" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="15.1717827401375"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-5.091456403710154,0)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(5.091456403710156,0)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,8.818661175747904)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-8.818661175747904)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-32" transform="translate(-100.41367190274623,237.09099220471577)">
        <path class="node node-hexagon" id="node-32" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-19.66826925657527l17.03322082466666,9.834134628287636l0,19.66826925657527l-17.03322082466666,9.834134628287636l-17.03322082466666,-9.834134628287636l0,-19.66826925657527l17.03322082466666,-9.834134628287636z"/>
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
      <g id="node-group-34" transform="translate(125.5079853757733,155.02326789293147)">
        <rect class="node node-rect" id="node-34" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="27.22222222222222" height="27.22222222222222"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(13.61111111111111,13.61111111111111)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(13.61111111111111,13.61111111111111)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-9.722222222222223l8.419691425682043,4.861111111111112l0,9.722222222222223l-8.419691425682043,4.861111111111112l-8.419691425682043,-4.861111111111112l0,-9.722222222222223l8.419691425682043,-4.861111111111112z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-36" transform="translate(38.339236647164576,97.08531386834889)">
        <circle class="node node-circle" id="node-36" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-38" transform="translate(-57.87571791828797,83.99230493390696)">
        <path class="node node-hexagon" id="node-38" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-14.972222222222223l12.966324795550346,7.486111111111112l0,14.972222222222223l-12.966324795550346,7.486111111111112l-12.966324795550346,-7.486111111111112l0,-14.972222222222223l12.966324795550346,-7.486111111111112z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-6.171934865900383,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-4.861111111111112l4.209845712841021,2.430555555555556l0,4.861111111111112l-4.209845712841021,2.430555555555556l-4.209845712841021,-2.430555555555556l0,-4.861111111111112l4.209845712841021,-2.430555555555556z" stroke-width="0" fill="#F4454F"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(6.171934865900383,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-4.861111111111112l4.209845712841021,2.430555555555556l0,4.861111111111112l-4.209845712841021,2.430555555555556l-4.209845712841021,-2.430555555555556l0,-4.861111111111112l4.209845712841021,-2.430555555555556z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-41" transform="translate(-64.40046560593102,117.13959022650032)">
        <path class="node node-hexagon" id="node-41" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-46" transform="translate(-89.83222480615551,129.31992301364764)">
        <rect class="node node-rect" id="node-46" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-48" transform="translate(-22.99126688491017,256.4340134771266)">
        <circle class="node node-circle" id="node-48" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-50" transform="translate(58.88503792377941,279.1848086852537)">
        <path class="node node-hexagon" id="node-50" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-52" transform="translate(69.25371182832426,110.74921460911222)">
        <rect class="node node-rect" id="node-52" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-55" transform="translate(89.72354255960153,203.5680722401261)">
        <rect class="node node-rect" id="node-55" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-60" transform="translate(124.47981606713914,217.4744694247152)">
        <circle class="node node-circle" id="node-60" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-62" transform="translate(-15.13030718344192,74.81078352610216)">
        <path class="node node-hexagon" id="node-62" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-64" transform="translate(-64.52758734461328,218.86722671244405)">
        <rect class="node node-rect" id="node-64" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-66" transform="translate(-1.3736256318520415,264.0807135226831)">
        <circle class="node node-circle" id="node-66" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-69" transform="translate(-25.50238661040672,279.20112088993034)">
        <circle class="node node-circle" id="node-69" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-74" transform="translate(37.3544363881652,287.1005107477687)">
        <path class="node node-hexagon" id="node-74" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-76" transform="translate(109.32532368187545,188.8452748389924)">
        <rect class="node node-rect" id="node-76" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-78" transform="translate(57.57285614046764,104.84891217135743)">
        <circle class="node node-circle" id="node-78" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-80" transform="translate(-59.36077164096286,139.70077646900768)">
        <path class="node node-hexagon" id="node-80" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-83" transform="translate(-41.596009988061724,116.62526892246213)">
        <path class="node node-hexagon" id="node-83" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-88" transform="translate(-12.211769412639978,89.30705187369288)">
        <rect class="node node-rect" id="node-88" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-90" transform="translate(-62.516960415693255,252.4336423696664)">
        <circle class="node node-circle" id="node-90" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-92" transform="translate(76.17940249479055,251.66049853613328)">
        <path class="node node-hexagon" id="node-92" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-94" transform="translate(93.10408588755979,107.83107494273622)">
        <rect class="node node-rect" id="node-94" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-97" transform="translate(102.38388275092322,228.52826940745072)">
        <rect class="node node-rect" id="node-97" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-102" transform="translate(101.48814563201148,177.34775054115178)">
        <circle class="node node-circle" id="node-102" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-104" transform="translate(-27.939726838442976,98.82566492233498)">
        <path class="node node-hexagon" id="node-104" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-106" transform="translate(-96.38823762673582,186.52092997041026)">
        <rect class="node node-rect" id="node-106" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-108" transform="translate(32.94557078577386,264.01457459774196)">
        <circle class="node node-circle" id="node-108" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-111" transform="translate(-41.36994708399229,243.35980787254948)">
        <circle class="node node-circle" id="node-111" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-116" transform="translate(-4.167539426200409,287.83582372147566)">
        <path class="node node-hexagon" id="node-116" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-118" transform="translate(75.04292342693141,267.63803807767306)">
        <rect class="node node-rect" id="node-118" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-120" transform="translate(89.69863244292306,136.14012026728489)">
        <circle class="node node-circle" id="node-120" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-122" transform="translate(9.289700648099554,72.7194847922406)">
        <path class="node node-hexagon" id="node-122" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-125" transform="translate(17.719945743815888,94.13640826170193)">
        <path class="node node-hexagon" id="node-125" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-131" transform="translate(242.9980347115398,168.93978099148669)">
        <path class="node node-hexagon" id="node-131" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-25.619494523418446l22.187133089396674,12.809747261709223l0,25.619494523418446l-22.187133089396674,12.809747261709223l-22.187133089396674,-12.809747261709223l0,-25.619494523418446l22.187133089396674,-12.809747261709223z"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-10.96792611396138,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-8.318017702408586l7.2036146394145035,4.159008851204293l0,8.318017702408586l-7.2036146394145035,4.159008851204293l-7.2036146394145035,-4.159008851204293l0,-8.318017702408586l7.2036146394145035,-4.159008851204293z" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(10.96792611396138,0)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-8.318017702408586l7.2036146394145035,4.159008851204293l0,8.318017702408586l-7.2036146394145035,4.159008851204293l-7.2036146394145035,-4.159008851204293l0,-8.318017702408586l7.2036146394145035,-4.159008851204293z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-133" transform="translate(-141.37845485696027,274.2868486592428)">
        <rect class="node node-rect" id="node-133" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="23.67933845563293" height="23.67933845563293"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(11.839669227816465,11.839669227816465)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(11.839669227816465,11.839669227816465)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-8.456906591297475l7.323895945495676,4.2284532956487375l0,8.456906591297475l-7.323895945495676,4.2284532956487375l-7.323895945495676,-4.2284532956487375l0,-8.456906591297475l7.323895945495676,-4.2284532956487375z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-135" transform="translate(-159.59843449805612,224.1950405074701)">
        <circle class="node node-circle" id="node-135" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="15.1717827401375"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(0,0)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(-5.091456403710154,0)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-2" transform="translate(5.091456403710156,0)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-3" transform="translate(0,8.818661175747904)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#FC83FB"/>
          </g>
          <g class="node-nested" id="node-nested-group-4" transform="translate(0,-8.818661175747904)" opacity="1">
            <circle class="node-nested-circle" r="2.7092469178816967" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-137" transform="translate(-56.028583231110936,50.29605084987136)">
        <path class="node node-hexagon" id="node-137" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-138" transform="translate(-317.4570666555651,213.17721130044177)">
        <circle class="node node-circle" id="node-138" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-142" transform="translate(-312.73831029108396,137.5359996363947)">
        <rect class="node node-rect" id="node-142" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-145" transform="translate(155.3054056970406,188.94023758616103)">
        <rect class="node node-rect" id="node-145" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-147" transform="translate(-98.56766694910183,277.7298549134389)">
        <circle class="node node-circle" id="node-147" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-149" transform="translate(-76.90113250133255,270.30174132890846)">
        <path class="node node-hexagon" id="node-149" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-151" transform="translate(-98.5903306239082,70.11842200590209)">
        <rect class="node node-rect" id="node-151" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-152" transform="translate(-268.0241921538789,165.34957000394107)">
        <path class="node node-hexagon" id="node-152" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-156" transform="translate(-330.6777535752376,160.83740515194503)">
        <circle class="node node-circle" id="node-156" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-159" transform="translate(173.77471882447034,163.04363709272627)">
        <circle class="node node-circle" id="node-159" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-161" transform="translate(-127.46314709418823,206.7193978759099)">
        <path class="node node-hexagon" id="node-161" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-163" transform="translate(-144.91090478709384,247.4787213925768)">
        <rect class="node node-rect" id="node-163" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-165" transform="translate(-78.30509384372542,57.125430861331054)">
        <circle class="node node-circle" id="node-165" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-166" transform="translate(-286.20883701798203,204.14035982939322)">
        <rect class="node node-rect" id="node-166" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-171" transform="translate(226.95088391841574,122.06786161700924)">
        <circle class="node node-circle" id="node-171" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-173" transform="translate(208.08052126644395,204.08471963605402)">
        <path class="node node-hexagon" id="node-173" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-175" transform="translate(266.32449686309405,202.02227946403306)">
        <rect class="node node-rect" id="node-175" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-177" transform="translate(227.58102006030188,216.03770475029975)">
        <circle class="node node-circle" id="node-177" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-180" transform="translate(287.68355091688716,190.40490299470852)">
        <circle class="node node-circle" id="node-180" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-181" transform="translate(-201.43503968166084,204.81511730053566)">
        <rect class="node node-rect" id="node-181" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-182" transform="translate(-179.2759655510615,193.74370225502693)">
        <path class="node node-hexagon" id="node-182" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-184" transform="translate(-161.27340028030773,300.5726059963527)">
        <rect class="node node-rect" id="node-184" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-185" transform="translate(292.56824585648735,168.08024904484517)">
        <path class="node node-hexagon" id="node-185" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-187" transform="translate(264.8713033022102,120.79844398730332)">
        <rect class="node node-rect" id="node-187" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
      <g id="node-group-189" transform="translate(249.70175832282234,119.83957040508217)">
        <circle class="node node-circle" id="node-189" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-191" transform="translate(286.91619238241987,145.93828456973844)">
        <path class="node node-hexagon" id="node-191" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-194" transform="translate(207.6002337057882,134.2908826156515)">
        <path class="node node-hexagon" id="node-194" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" d="m0,-7.700000000000001l6.668395609140178,3.8500000000000005l0,7.700000000000001l-6.668395609140178,3.8500000000000005l-6.668395609140178,-3.8500000000000005l0,-7.700000000000001l6.668395609140178,-3.8500000000000005z"/>
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
      <g id="node-group-195" transform="translate(-179.69862775333436,254.38230655022426)">
        <circle class="node node-circle" id="node-195" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" r="7"/>
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
      <g id="node-group-196" transform="translate(-201.6131898245047,229.0908781449346)">
        <rect class="node node-rect" id="node-196" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#2EADA1" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#F4454F"/>
          </g>
        </g>
      </g>
      <g id="node-group-198" transform="translate(-128.7846313432243,318.14368989476566)">
        <circle class="node node-circle" id="node-198" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" r="7"/>
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
      <g id="node-group-199" transform="translate(244.05284121536206,211.54824157756005)">
        <rect class="node node-rect" id="node-199" stroke-width="0.9333333333333333" stroke="white" stroke-opacity="1" fill-opacity="1" fill="#3BD1C7" width="14" height="14"/>
        <g>
          <g class="node-nested" id="node-nested-group-0" transform="translate(7,7)" opacity="1"/>
          <g class="node-nested" id="node-nested-group-1" transform="translate(7,7)" opacity="1">
            <path class="node-nested-hexagon" d="m0,-5l4.330127018922193,2.5l0,5l-4.330127018922193,2.5l-4.330127018922193,-2.5l0,-5l4.330127018922193,-2.5z" stroke-width="0" fill="#FC83FB"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
  </StyledParallaxWrapper>
  )
})

export default ForegroundHero;