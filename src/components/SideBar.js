import React from 'react'
import styled from 'styled-components'
import { Button6 } from '../components'
import { useNavigate } from "react-router-dom";


export default function SideBar() {
  const navigate = useNavigate();

  const  handleOnClickCreateRequest =(event)=> {
    if (event.target.innerText.toLowerCase() === 'create request'){
      navigate("/RequestForm");
      event.target.innerText = "Dashboard"
    }else{
      navigate("/Dashboard");
      event.target.innerText = "Create Request"
    } 
  }

  const  handleOnClickGoToResults =(event)=> {
    navigate("/Results" , { state: {  requestType : 'simple', requestData : 'with_latlong' ,userName : 'raghu' ,requestID : '72a26926-3416-4c9d-b3c4-1174d4729f44' } });
  }
  
  return (
    <Wrapper>
        <div className="mycontainer">
          <Button6 text="Create Request" onClick={handleOnClickCreateRequest} />
          <Button6 text="GotoResults" onClick={handleOnClickGoToResults} />
        </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`
{
    height: 90vh;
}

p{
    text-align: center;
   }

`
