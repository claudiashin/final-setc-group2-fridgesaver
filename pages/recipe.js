import Head from 'next/head'
import styled from 'styled-components';
import Recipe from '../comps/Recipe';
import Heart from '../comps/Heart';
import Direction from '../comps/Directions';
import CircleButton from '../comps/Circlebutton';

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh;
  // height: 812px;
  align-items: center;
  background-color: #FFF8F8;
  overflow: scroll;

    .navbar {
      width: 100%;
      height: 40px;
      background-color: #9FCDA4;
    }

    .directions {
      display: flex;
      // width: 50%;
      // height: 350px; 
      margin-bottom: 20px;
    }

    .bottom {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      max-width: 380px;
      height: 20%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
    }
`;

export default function Home() {
  return <HomeCont>
    <div className="navbar"></div>
    <Recipe/>
    {/* <div className="heart"><Heart routeTo="/saved"/></div> */}
    <div className="directions"><Direction/></div>
    <div className="bottom">
      <CircleButton text="Costs Saved"/>
      <CircleButton text="Food for Thought"/>
      <CircleButton text="Tips on Saving"/>
    </div>
  </HomeCont>
}