import React from 'react'
import styled from 'styled-components'

export default function Button2(props) {
  return (
    <Wrapper>
    <button className='button-2' onClick={props.onClick} > {props.text} </button>        
  </Wrapper>  
  )
}


const Wrapper = styled.div`
/* CSS */
.button-2 {
  background-color: var(--clr-primary-7);
  border: 0;
  border-radius: .375rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1;
  width:fit-content;
  padding: 1rem 1rem;
  text-align: center;
  text-decoration: none;  
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
}

.button-2:disabled {
  color: #787878;
  cursor: auto;
}

.button-2:not(:disabled):hover {
  transform: scale(1.05);
  background-color: var(--clr-primary-7);
}

.button-2:not(:disabled):hover:active {
  transform: scale(1.05) translateY(.125rem);
}

.button-2:focus {
  outline: 0 solid transparent;
}

.button-2:focus:before {
  border-width: .125rem;
  content: "";
  left: calc(-1*.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1*.375rem);
  transition: border-radius;
  user-select: none;
}

.button-2:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button-2:not(:disabled):active {
  transform: translateY(.125rem);
}
`
