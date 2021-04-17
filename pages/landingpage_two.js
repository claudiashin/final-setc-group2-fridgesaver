import Head from 'next/head';
import Logo from '../comps/Logo';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Information from '../comps/Information';
import Message from '../comps/Message';
import Fridge from '../comps/Fridge';
import Arrow from '../comps/Arrow';
import styled from 'styled-components';

const HomeCont = styled.div`
// max-width: 450px;
// height: 812px;
background-color: #FFF8F8;
overflow: scroll;

.navbar {
  width: 100$;
  height: 40px;
  background-color: #9FCDA4;
}

.logo {
  margin-top: 30px;
}

.cta-fridge {
  margin: 30px;
}

.message {
    // background-color: #FFF3F3;
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

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px;
}

.footer {
  margin: 35px;
}
`;

export default function Home() {

  return <HomeCont>
    <div className="navbar"></div>

    <div className="logo">
      <Logo />
    </div>

    <div className="cta-fridge">
      <Fridge image="fridge-open.png" />
    </div>

    <div className="message">
      <div className="top">
        <Message routeTo="/landingpage_three" text="Did you know that..." width="130" height="130" backgroundopacity="rgba(224, 158, 158, 0.2)" fontsize="18" />
        <Message routeTo="/landingpage_three" text="Start saving by..." width="130" height="130" backgroundopacity="rgba(224, 158, 158, 0.2)" fontsize="18" />
      </div>

      <div className="bottom">
        <Message /*routeTo="/landingpage_three"*/ text="7% of greenhouse gases produced globally are due to preventable food waste" width="135" height="135" backgroundopacity="rgba(224, 158, 158, 0.2)" />
        <Message /*routeTo="/landingpage_three"*/ text="About 63% of the food that is thrown away could be eaten or used in some sort of way" width="135" height="135" backgroundopacity="rgba(224, 158, 158, 0.2)" />
      </div>
    </div>

    <div className="start-button">
      <Startbutton text="Let's Get Started" />
    </div>

    <Line />

    <div className="footer">
      <Developer name1="Iori Takeshita" name2="Claudia Shin" name3="Maggie Su" name4="Leighai Nishibata" />
    </div>

  </HomeCont>
}


