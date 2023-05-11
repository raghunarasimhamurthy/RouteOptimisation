import React from 'react'
import styled from 'styled-components'
import Button6 from './Button6'

export default function DashBoard() {
  return (
    <Wrapper>
      <div id="requestDashboard" className='request-dashboard'>
     
        <div className="request-list ">
          <div className="request-list-header">
            <p>List of Requests</p>
          </div>
          <div className="request-list-body">
            <div id="item1" className="list-item fs18">
              <p>Simple Route Optimization</p>
              <p>07-April-2023</p>
              <a href="#">File : Route Optimization File</a>
              <a href="#">View Detail</a>
            </div>
            <div id="item2" className="list-item fs18">
              <p>Optimization with Priority</p>
              <p>07-April-2023</p>
              <a href="#">File : Route Optimization File</a>
              <a href="#">View Detail</a>
            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .request-list-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 26px;
    padding-bottom : 10px;
  }

  .request-list-body{
    display: grid;
    grid-template-columns: 100%;
    row-gap: 10px;
  }
  .list-item{
    display: grid;
    grid-template-columns: 50% 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    padding: 5px 10px;
    row-gap :10px;
  }

  .list-item>:nth-child(2),.list-item>:nth-child(4){
    text-align: right;
  }

  .list-item:hover, 
  .list-item:focus{
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  .list-item:active{
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  }

  

`