import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import {useRouter} from 'next/router';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navigation';
import React, {component, useState,useEffect} from 'react';

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
      width: 100%;
      height:65%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .row {
        display:flex;
        margin-top: 15px;
      }

      .item {
        display:flex;

        margin: 10px;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }
`;

var data = {
  select1:null,
  select2:null,
  select3:null,
}





export default function Home() {
  const router = useRouter();



  const OnionNoodleDry = () =>{
    data.select1 = "Noodle";
    data.select2 = "Dry";
    data.select3 = "Onion";
    sessionStorage.setItem("options2",JSON.stringify(data));
    router.push("/recipe_only/home")
    }

    const MushroomRiceDry = () =>{
      data.select1 = "Rice";
      data.select2 = "Dry";
      data.select3 = "Mushroom";
      sessionStorage.setItem("options2",JSON.stringify(data));
      router.push("/recipe_only/home")
      }

      const EggplantNoodleSoup = () =>{
        data.select1 = "Noodle";
        data.select2 = "Soup";
        data.select3 = "Eggplant";
        sessionStorage.setItem("options2",JSON.stringify(data));
        router.push("/recipe_only/home")
        }

        const PepperRiceSoup = () =>{
          data.select1 = "Rice";
          data.select2 = "Soup";
          data.select3 = "Pepper";
          sessionStorage.setItem("options2",JSON.stringify(data));
          router.push("/recipe_only/home")
          }

          const EggplantNoodleDry = () =>{
            data.select1 = "Noodle";
            data.select2 = "Dry";
            data.select3 = "Eggplant";
            sessionStorage.setItem("options2",JSON.stringify(data));
            router.push("/recipe_only/home")
            }

            const PepperRiceDry = () =>{
              data.select1 = "Rice";
              data.select2 = "Dry";
              data.select3 = "Pepper";
              sessionStorage.setItem("options2",JSON.stringify(data));
              router.push("/recipe_only/home")
              }
           

              const EggplantRiceDry = () =>{
                data.select1 = "Rice";
                data.select2 = "Dry";
                data.select3 = "Eggplant";
                sessionStorage.setItem("options2",JSON.stringify(data));
                router.push("/recipe_only/home")
                }

                const OnionNoodleSoup = () =>{
                  data.select1 = "Noodle";
                  data.select2 = "Soup";
                  data.select3 = "Onion";
                  sessionStorage.setItem("options2",JSON.stringify(data));
                  router.push("/recipe_only/home")
                  }

                  const MushroomRiceSoup = () =>{
                    data.select1 = "Rice";
                    data.select2 = "Soup";
                    data.select3 = "Mushroom";
                    sessionStorage.setItem("options2",JSON.stringify(data));
                    router.push("/recipe_only/home")
                    }
  







  
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
    <Line LineBgColor="#000" LineWidth="50%" LineHeight="5px"/>
    <div className="col">
      <div className="row">
          <img className="item" src="/DN-Onion.jpg" onClick ={OnionNoodleDry} />
          <img className="item" src="/DR-Mushroom.jpg"onClick ={MushroomRiceDry} />
          <img className="item" src="/SB-Eggplant.jpg"onClick={EggplantNoodleSoup} />
      </div>
      <div className="row">
          <img className="item" src="/SR-Pepper.jpg" onClick = {PepperRiceSoup}/>
          <img className="item" src="/DN-Eggplant.jpg"onClick = {EggplantNoodleDry}/>
          <img className="item" src="/DR-Pepper.jpg" onClick ={PepperRiceDry}/>
      </div>
      <div className="row">
          <img className="item" src="/DR-Eggplant.jpg" onClick ={EggplantRiceDry} />
          <img className="item" src="/SB-Onion.jpg" onClick ={OnionNoodleSoup} />
          <img className="item" src="/SR-Mushroom.jpg" onClick ={MushroomRiceSoup}/>
      </div>
    </div>
    <Footer/>
  </HomeCont>
}