import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import {useRouter} from 'next/router';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navigation';

const HomeCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 150px;

  justify-content: center;
  align-items: center;
  background-color: #FFF8F8;

    .navbar {
      width: 100%;
    }

    .col {
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .row {
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
        // margin-top: 15px;
      }

      .row img {
        width: 100%;
        margin-top: 5px;
        vertical-align: middle;
      }

    
    }
`;


export default function Home() {
  const router = useRouter();
  
  return <HomeCont>
    <Head>
      <title>Recipes</title>
    </Head>
    <div className="navbar">
      <Navbar 
        onClick={()=>router.push("/")}
      />
    </div>
    <Header icon="/recipe-book.png" text="Recipes"/>
    <Line LineBgColor="#000" LineWidth="70%" LineHeight="3px"/>
    <div className="col">
      <div className="row">
          
          <img className="item" src="/DN-Onion.jpg" onClick={()=>router.push("/")}/>  {/*onion noodle dry */}
          <img className="item" src="/DR-Mushroom.jpg" onClick={()=>router.push("/")}/>  {/*mushroom rice dry */}
          <img className="item" src="/SB-Eggplant.jpg" />  {/*eggplant noodle soup */}
          <img className="item" src="/DN-Carrot.jpg" />   {/*carrot noodle dry */}
          <img className="item" src="/NS-Mushroom.jpg" />  {/*mushroom noodle soup */}
          <img className="item" src="/SB-Pepper.jpg" />   {/*pepper noodle soup */}
          <img className="item" src="/SR-Onion.jpg" />   {/*onion rice soup */}
          <img className="item" src="/carrot_rice_soup.jpeg" />  {/*carrot rice soup */}
          <img className="item" src="/Spicy-Carrot-Fried-Rice.png" />  {/*carrot rice dry */}
      </div>
      <div className="row">
          <img className="item" src="/SR-Pepper.jpg" />  {/*pepper rice soup*/}
          <img className="item" src="/DN-Eggplant.jpg"/> {/*eggplant noodle dry */}
          <img className="item" src="/DR-Pepper.jpeg" />  {/*pepper rice dry */}
          <img className="item" src="/DN-Tomato.jpg" />  {/*tomato noodle dry */}
          <img className="item" src="/DR-Onion.jpg" />  {/*onion rice dry */}
          <img className="item" src="/SB-Tomato.jpg" />  {/*tomato noodle soup  */}
          <img className="item" src="/tomato_rice_soup.jpeg" /> {/*tomato rice soup */}
          <img className="item" src="/DN-Pepper.jpg" />   {/*pepper noodle dry */}
      </div>
      <div className="row">
          <img className="item" src="/DR-Eggplant.jpg" />  {/*eggplant rice dry */}
          <img className="item" src="/SB-Onion.jpg" />   {/*onion noodle soup */}
          <img className="item" src="/SR-Mushroom.jpg" /> {/*mushroom rice soup */}
          <img className="item" src="/mushroom_pasta.jpeg" />  {/*mushroom noodle dry */}
          <img className="item" src="/SB-Carrots.jpg" />   {/*carrot noodle soup */}
          <img className="item" src="/SR-Eggplant.jpg" />   {/*eggplant rice soup */}
          <img className="item" src="/Tomato-Fried-Rice.jpeg" /> {/*tomato rice dry*/}
      </div>
    </div>
    <Footer/>
  </HomeCont>
}