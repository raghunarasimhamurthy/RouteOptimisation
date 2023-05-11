import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function ChoiceControl(props) {
    const [requesttype, setRequesttype] = useState("");
    const [IsEditMode, setIsEditMode] = useState(true);

    const handleClick = () => {
        setIsEditMode(editMode => !editMode);
    }

    function onChangeValue(event) {
        setRequesttype(event.target.value);
        console.log(event.target.value);
    }
    return (
        <Wrapper>
            {IsEditMode &&
                <ul className="panel-requesttype" onChange={onChangeValue} >
                    {props.data.map((item) => <li key={item.id}>
                        <input type="radio"
                            id={item.id}
                            key={item.id}
                            value={item.id}
                            name={props.name}
                        />
                        <label htmlFor={item.id}>{item.text}</label>
                    </li>
                    )}
                </ul>

            }
            {!IsEditMode &&
                <a onClick={handleClick} className='green-dark selected' style={{ cursor: 'pointer' }} ><FontAwesomeIcon icon={faSquareCheck} /> {requesttype} </a>
            }
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
