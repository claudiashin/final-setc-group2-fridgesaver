import Head from 'next/head';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Information from '../comps/Information';
import Message from '../comps/Message';
import Fridge from '../comps/Fridge';
import Arrow from '../comps/Arrow';
import styled from 'styled-components';
import {useRouter} from 'next/router';
// import {Router, useRouter} from 'next/router';


const HomeCont = styled.div`
max-width: 450px;
height: 1200px;
background-color: #FFF8F8;


.logo {
  display: flex;
  justify-content: center;
  align-items: center;

    img {
      width: 240px;
    }
}

.cta-fridge {
  margin: 50px;
}

.message {
    background-color: #FFF3F3;
    height: 340px;
    border-radius: 20px;
    margin: 30px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.bottom {
    display: flex;
    justify-content: center;
    align-items: center;
}

// .information {
//   margin: 25px;
// }

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
}

.footer {
  margin: 10px;
}
`;

export default function Home() {

  return <HomeCont>
    <div className="navigationbar"></div>

    <div className="logo">
      <img src="logo.png"></img> 
    </div>

    <div className="cta-fridge">
      <Fridge image="fridge-open.png"/>
    </div>

    <div className="message">
        <div className="top">
        <Message text="Did you know that..." width="110" height="110"/>
        <Message text="7% of greenhouse gases produced globally are due to preventable food waste" width="130" height="130"/>
        </div>

        <div className="bottom">
        <Message text="About 63% of the food that is thrown away could be eaten or used in some sort of way" width="130" height="130"/>
        </div>
    </div>

    {/* <div className="information">
      <Information titletext="WHAT THIS APP DOES" paratext="This mobile application provides recipes focused on using the foods in your fridge to save time and costs, all while minimizing food waste."/>
    </div> */}

    <div className="start-button">
      <Startbutton text="Let's Get Started"/>
    </div>

    <Line/>

    <div className="footer">
      <Developer name1="Iori Takeshita" name2="Claudia Shin" name3="Maggie Su" name4="Leighai Nishibata"/>
    </div>
  
 
  </HomeCont>
}


