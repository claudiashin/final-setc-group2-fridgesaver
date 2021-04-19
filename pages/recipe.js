import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import Recipe from '../comps/Recipe';


const HomeCont = styled.div`
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .bottom {
    display:flex;

    .left {
      display:flex;
      flex-direction: column;
      padding: 10px;
    }

    .right {
      padding: 10px;
    }
  } 
`;

//example
export default function Home() {
  return <HomeCont>
    <Header>Home Page</Header>
    <Line/>
    <div className="bottom">
      <div className="left">
      <Recipe/>
      <Recipe/>
      </div>
      <div className="right">
      <Recipe/>
      <Recipe/>
      </div>
    </div>
  </HomeCont>
}
