import React from 'react'
import styled from 'styled-components'

const RequestType = [
    {
        id : "1",
        text : "abc"
    },
    {
        id : "2",
        text : "def"
    },
    {
        id : "3",
        text : "ghi"
    },

]


function ChoiceControl(props) {

   function onChangeValue(event) {
        console.log(event.target.id);    
    }
    return (
        <Wrapper>
                <ul onChange={onChangeValue} className="panel-requesttype">
                 {
                    RequestType.map(item => (
                            <li>
                                <input type="radio" id={item.id} name="request-type"   />
                                <label htmlFor={item.id}>{item.text} </label>
                            </li>
                    ))
                 }
                            <li>
                                <input type="radio" id="type1" name="request-type" />
                                <label htmlFor="type1">Simple Route Optimization</label>
                            </li>
                            <li>
                                <input type="radio" id="type2" name="request-type" />
                                <label htmlFor="type2">Optimization With Priority</label>
                            </li>
                            <li>
                                <input type="radio" id="type3" name="request-type" />
                                <label htmlFor="type3">Optimization Vehicle Allocation</label>
                            </li>
                        </ul>
        </Wrapper>
    )
}

export default ChoiceControl;


const Wrapper = styled.div`


.panel-requesttype {
    display: flex; 
    flex-direction: row;
    margin:5px 0 0 0;
    padding:0;
    height: fit-content;
    width: 100%;
}

.panel-requesttype li {  
   margin:0 5px 0 0;
   width:fit-content;  
   height:40px;
}

.panel-requesttype label, .panel-requesttype input {
   display:inline-block;
   height: auto;   
}

.panel-requesttype input[type="radio"] {
   opacity:0;
}

.panel-requesttype input[type="radio"]:checked + label {
   background:var(--clr-primary-4);
}

.panel-requesttype label {
    padding:5px;
    border:1px solid #CCC; 
    cursor:pointer;
}

.panel-requesttype label:hover {
    background:#DDD;
}


`
