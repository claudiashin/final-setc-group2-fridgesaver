import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import {useRouter} from 'next/router';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navigation';

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 812px;
  justify-content: center;
  align-items: center;
  background-color: #FFF8F8;

    .navbar {
      width: 100%;
    }

    .saved_col {
      display:flex;
      width: 100%;
      height:65%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .saved_row {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 5px;
      }

      .item {
        display:flex;
        flex-wrap: wrap;
        margin: 10px;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }
`;


export default function Home() {
  const router = useRouter();
  
  return <HomeCont>
    <Head>
      <title>Saved Recipes</title>
    </Head>
    <div className="navbar">
      <Navbar 
        onClick={()=>router.push("/")}
      />
    </div>
    <Header icon="/bookmarks_filled.png" text="Saved Recipes"/>
    <Line LineBgColor="#000" LineWidth="50%" LineHeight="5px"/>
    <div className="saved_col">
      <div className="saved_row">
          <img className="item" src="/DN-Onion.jpg" />
          <img className="item" src="/DR-Mushroom.jpg" />
          <img className="item" src="/SB-Eggplant.jpg" />
      </div>
      <div className="saved_row">
          <img className="item" src="/SR-Pepper.jpg" />
          <img className="item" src="/DN-Eggplant.jpg"/>
          <img className="item" src="/DR-Pepper.jpg" />
      </div>
      <div className="saved_row">
          <img className="item" src="/DR-Eggplant.jpg" />
          <img className="item" src="/SB-Onion.jpg" />
          <img className="item" src="/SR-Mushroom.jpg" />
      </div>
    </div>
    <Footer/>
  </HomeCont>
}