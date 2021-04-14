import Head from 'next/head';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Information from '../comps/Information';
import styled from 'styled-components';


const HomeCont = styled.div`
max-width: 375px;
height: 812px;
background-color: #FFF8F8;

.navigationbar {}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo 
  img {
    width: 200px;
}

.cta-fridge 
  img{
    width: 100px;
}

.information {
  margin: 25px;
}

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
}
`;

export default function Home() {

  return <HomeCont>
    <div className="navigationbar"></div>

    <div className="logo">
      <img src="logo.png"></img> 
    </div>

    <div className="cta-fridge">
      <img src="fridge.png"></img>
    </div>

    <div className="information">
      <Information titletext="WHAT THIS APP DOES" paratext="This mobile application provides recipes focused on using the foods in your fridge to save time and costs, all while minimizing food waste."/>
    </div>

    <div className="start-button">
      <Startbutton text="Let's Get Started"/>
    </div>

    <div className="footer">
      <Line/>
      <Developer name1="Iori Takeshita" name2="Claudia Shin" name3="Maggie Su" name4="Leighai Nishibata"/>
    </div>
  
 
  </HomeCont>
}


