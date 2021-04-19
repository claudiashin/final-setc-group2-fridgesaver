import Head from 'next/head'
import styled from 'styled-components';
import Recipe from '../comps/Recipe';
import Heart from '../comps/Heart';
import Direction from '../comps/Directions';
import CircleButton from '../comps/Circlebutton';

const HomeCont = styled.div`

  display: flex;
  flex-direction: column;
  // width: 450px;
  height: 812px;
  justify-content: center;
  align-items: center;
  background-color: #FFF8F8;
  position: relative;

    .navbar {
      display: flex;
      width: 100%;
      height: 40px;
      background-color: #9FCDA4;
    }

    .heart {
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }

    .directions {
      display: flex;
      overflow: scroll;
      width: 430px;
      height: 350px; 
      margin-top: 20px;
    }

    .bottom {
      display: flex;
      width: 100%;
      max-width: 380px;
      height: 180px;
      justify-content: space-between;
      align-items: center;
    }
`;

export default function Home() {
  return <HomeCont>
    <div className="navbar"></div>
    <Recipe/>
    <div className="heart"><Heart /></div>
    <div className="directions"><Direction/></div>
    <div className="bottom">

      <CircleButton text="Costs Saved"/>
      <CircleButton text="Food for Thought"/>
      <CircleButton text="Tips on Saving"/>

    </div>
  </HomeCont>
}