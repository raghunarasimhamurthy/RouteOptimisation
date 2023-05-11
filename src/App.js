
import React from "react";
import './App.css';
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle , faAngry} from '@fortawesome/free-solid-svg-icons'

import { Demo, DashBoard, NavBar, SideBar , RequestForm , Map } from './components'
import { Outlet } from "react-router-dom";



function App() {
  return (
    <Wrapper>  
      {/* <Map /> */}
     <NavBar />
     <main id="section" >
     <SideBar />
     <Outlet />
     </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
#section{
  display : grid;
  grid-template-columns: 20% auto;
  column-gap: 1rem; 
}
`

export default App;
library.add(faCircle);

