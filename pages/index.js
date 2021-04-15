import Head from 'next/head';
import Logo from '../comps/Logo';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Information from '../comps/Information';
import Fridge from '../comps/Fridge';
import Arrow from '../comps/Arrow';
import styled from 'styled-components';

const HomeCont = styled.div`
max-width: 450px;
height: 812px;
background-color: #FFF8F8;
overflow: scroll;

.navbar {
  width: 100$;
  height: 40px;
  background-color: #9FCDA4;
}
  
.cta-fridge {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
  
.information {
  margin: 35px;
}

.footer {
  margin: 20px;
}
`;

export default function Home() {

  return <HomeCont>
    <div className="navbar"></div>

    <div className="logo">
      <Logo />
    </div>

    <div className="cta-fridge">
      <Arrow />
      <Fridge routeTo="/landingpage_two" />
    </div>

    <div className="information">
      <Information titletext="WHAT THIS APP DOES" paratext="This mobile application provides recipes focused on using the foods in your fridge to save time and costs, all while minimizing food waste." />
    </div>

    <Line />

    <div className="footer">
      <Developer name1="Iori Takeshita" name2="Claudia Shin" name3="Maggie Su" name4="Leighai Nishibata" />
    </div>


  </HomeCont>
}


