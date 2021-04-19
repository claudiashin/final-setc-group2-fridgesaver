import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import StartButton from '../comps/Startbutton';


const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // max-width: 450px;
  height: 812px;
  align-items: center;
  background-color: #FFF8F8;

    .navbar {
      width: 100%;
      height: 40px;
      background-color: #9FCDA4;
    }

    p {
      font-family: 'Athiti', sans-serif;
    }

    .top {
      display:flex;
      flex-direction: column;

      .step {
        line-height: 30px;
        margin: 5px;
      }

      .bold {
        font-weight: bold;
      }
    }

    p.bottom {
      font-weight: bold;
      padding: 5px;
      margin-top: 30px;
    }

    .startbutton {
      display: flex;
      height: 100px;
      justify-content: center;
      align-items: center;
    }
`;


export default function Home() {
  return <HomeCont>
    <div className="navbar"></div>
    <Header icon="/video-tutorial.png" text="Tutorial" text2="(Based on single servings)"/>
    <div className="top">
      <p className="step"><span class="bold">Step 1</span> - Select your main</p>
      <p className="step"><span class="bold">Step 2</span> - Select your style</p>
      <p className="step"><span class="bold">Step 3</span> - Select your veggies</p>
    </div>
    <p className="bottom">Voila! You have your recipe!!</p>
    <div className="startbutton">
    <StartButton text="Skip" brdrcolor="none" width="100px" routeTo="options/option1"/>
    </div>
  </HomeCont>
}