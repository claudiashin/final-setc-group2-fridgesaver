import Head from 'next/head';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Information from '../comps/Information';
import styled from 'styled-components';
import {useRouter} from 'next/router';
// import {Router, useRouter} from 'next/router';


const HomeCont = styled.div`
max-width: 450px;
height: 950px;
background-color: #FFF8F8;

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 240px;
  }
}
  
.cta-fridge {}
  
.information {
  margin: 25px;
}

// .start-button {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 40px;
// }

.footer {
  margin: 10px;
}
`;

export default function Home() {

  return <HomeCont>
    <div className="logo">
      <img src="logo.png"></img> 
    </div>

    <div className="cta-fridge"></div>

    <div className="information">
      <Information titletext="WHAT THIS APP DOES" paratext="This mobile application provides recipes focused on using the foods in your fridge to save time and costs, all while minimizing food waste."/>
    </div>

    {/* <div className="start-button">
      <Startbutton text="Let's Get Started"/>
    </div> */}

    <Line/>

    <div className="footer">
      <Developer name1="Iori Takeshita" name2="Claudia Shin" name3="Maggie Su" name4="Leighai Nishibata"/>
    </div>
  
 
  </HomeCont>
}


