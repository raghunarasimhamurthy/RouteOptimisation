import React from 'react'
import styled from 'styled-components'

export default function NavBar() {
  return (
    <Wrapper>
      <header>
        <div className="heading">
          <div>Route Optimization Portal</div>
          <div>Hello <strong>Test User, </strong> <a href="#">logout </a>
          </div>
        </div>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.div`
header {
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--clr-primary-7);
  border-radius: var(--radius);
  text-align: center;
  text-transform: uppercase;
}

.heading{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.heading > :first-child{
  line-height: 70px;
  margin: 10px;
  font-size: x-large;
  letter-spacing:1px;
}
.heading > :nth-child(2){
  line-height: 70px;
  margin: 10px;
  font-size: large;
  font-weight: bold;
  letter-spacing:1px;
}
`