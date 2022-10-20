import styled from 'styled-components';
import ParallaxHeroSection from './components/ParallaxHeroSection';
import ContentSection from './ContentSection'
import CrossRevealSection from './CrossRevealSection'
import GridSection from './GridSection'
import SidePanelSection from './SidePanelSection'

const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`

const StyledTitle = styled.h1`
  color: black;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding: 30px;
`

const StyledContentSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <>
    <StyledHeroSection>
      <StyledTitle>MONSTA FUNGUS</StyledTitle>
      <ParallaxHeroSection />
    </StyledHeroSection>
    <StyledContentSection>
      <ContentSection 
        title={'Background'} 
        text={'MONSTA FUNGUS was born out of my love for networks (or graphs as it is also typically referred to), which I stumbled upon through my interest in data visualizations.Networks represent connections, a desirable and important aspect in all out lives. They resembles an organic-looking structure which is very pleasing to the eye (in my opinion at least) and relate to nature, such as fungi and fauna.'} 
        text2={'At its simplest form, each monsta fungus is a randomly generated network created from a force-directed layout implemented by d3.js. In particular, the d3-force module, which its part of d3.js, was key to this entire project. I relied on this module to simulate physical forces on the nodes and edges of a network, to create a natural and aesthetically pleasing layout for all elements in an output.'}
      />
    </StyledContentSection>
    <CrossRevealSection 
      images = {['fungus1.jpg', '_FUNGUS-FXHASH0.6515676476992667.png']}
    />
    <StyledContentSection>
      <ContentSection 
        title={'Behind the Layout Algorithm'} 
        text={'Getting an aesthetically pleasing structure, or positioning of nodes, is important because it forms the skeleton of the output. I was also hoping to create sufficient variation in structures. Without any formal education in networks, their type of models and terminology, I naively tackled this by creating my own simple network-creating algorithm based from the digits of a random seed. I knew that there needed to be a balance between clustering and path lengths. Highly-clustered networks look like ugly hairballs, while a network with too many long paths simply look like overgrown weeds. I did quite like the result of my algorithm, and nothing much has changed with it before the mint. Early success in creating my own networks really did spur me on to continue playing with this project.'}
        text2={'I also ventured to researching other random graph generation models, and was excited to learn about the Barabasi-Albert model, which is an algorithm for generating random scale-free networks using a preferential attachment mechanism. Based on the random seed, an output has the possibility to be rendered from my custom algorithms or the Barabasi-Albert model.'}
      />
    </StyledContentSection>
    <div style={{display: 'flex'}}>
      <CrossRevealSection 
        images = {['fungus6.jpg', 'fungus7.jpg']}
      />
      <CrossRevealSection 
        images = {['_FUNGUS-FXHASH0.8792634280398488.png', '_FUNGUS-FXHASH0.43946235603652894.png']}
      />
    </div>
    <GridSection 
      images={['_FUNGUS-FXHASH0.4782585212960839.jpg', '_FUNGUS-FXHASH0.8651200805325061.jpg', '_FUNGUS-FXHASH0.41888725641183555.jpg']}
      title={'A deep dive into traits'} 
      subtitle={'Palette'} 
      text={'I have only one palette containing 10 colors, which is used to give color to all elements (nodes and edges), including the background. There is an equal chance for a color to be chosen as a background, except for black. Some color combinations for elements with a background color do not work well together, so I added a blacklist of these combinations, and replaced them with a black background.'}
    />
    <GridSection 
      images={['_FUNGUS-FXHASH0.5623313742689788.jpg', '_FUNGUS-FXHASH0.7215178227052093.jpg', 'fungus8.jpg']}
      subtitle={'Node style'} 
      text={'This trait influences the final look greatly. There are 5 possible node shapes: circles, squares, hexagons, blobs and petals. These 5 shape combinations are assigned based on the random seed: only blobs, only petals, only circles, only hexagons, a mixture of hexagons and circles, a mixture of circles, hexagons and squares.'}
      text2={'The node fill type determines whether all or some nodes are filled with color or not. To add some decoration and uniqueness, all nodes contain nested nodes, the count of nested nodes in each node being determined by cycling through the digits of the random seed'}
    />
    <GridSection 
      images={['_FUNGUS-FXHASH0.3657126296311617.jpg', '_FUNGUS-FXHASH0.11404961533844471.png', '_FUNGUS-FXHASH0.7595721937250346.jpg']}
      subtitle={'Edge style'} 
      text={'There are 2 possible edge types: straight or sloped. These paths can either have a gradient of solid color fill.'}
    />
    <SidePanelSection 
      asset={'app2.png'}
      title={'Gallery'} 
      text={'Want to see more? I have created a gallery of hundreds of MONSTA FUNGUS, showcasing the possible traits and structures of outputs. The web app comes with zoom, sort and filter features so you will be able to observe each output in detail.'} 
      url={'https://monsta-fungus-viewer.herokuapp.com/'}
    />
    <StyledContentSection>
      <ContentSection 
        animate={true}
        title={'Sprout your own generative fungus! Mint a MONSTA FUNGUS on fxhash'}
        text={'https://www.fxhash.xyz/generative/18420'} 
        text2={'Created by @campyoutsider'} 
      />
    </StyledContentSection>
    </>
  );
}

export default App;
