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
  // height: 812px;
  justify-content: center;
  align-items: center;
  background-color: #FFF8F8;
  overflow: scroll;

    .navbar {
      width: 100%;
      height: 40px;
      background-color: #9FCDA4;
    }

    .heart {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      max-width: 450px;
      min-width: 450px;
    }

    .directions {
      max-width: 450px;
    }
`;

export default function Home() {
  return <HomeCont>
    <div className="navbar"></div>
    <Recipe />
    <div className="heart"><Heart /></div>
    <div className="directions"><Direction /></div>

    <CircleButton/>
  </HomeCont>
}