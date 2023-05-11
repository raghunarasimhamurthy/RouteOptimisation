import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { Button2, ChoiceControl } from '../components'
import { RequestType, RequestDataType } from "../utils/constants"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSquareCheck } from '@fortawesome/free-solid-svg-icons';


function getRequestTypeNameFromId(id, type) {
  if (type === 'reqtype') {
    var item = RequestType.find(req => req.id === id);
    return item.text;
  }
  if (type === 'reqdatatype') {
    var item = RequestDataType.find(req => req.id === id);
    return item.text;
  }


}


function RequestForm() {
  const [requestData, setRequestData] = useState({});
  const [uploadedData, setUploadedData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }, [])


  const handleOnClickRequestData = (event) => {

    var requestTypeValue = document.querySelector('input[name="request-type"]:checked')
    var requestDataValue = document.querySelector('input[name="request-datatype"]:checked')
    var errorControl = document.getElementById("info-band-1");
    var editPanel = document.getElementById("editPanel");
    var displayPanel = document.getElementById("displayPanel");

    var errorHtml = ''



    if (event.target.innerText.toLowerCase() === 'next') {
      if (requestTypeValue === null) {
        errorHtml += '<p>aSelect Request Type</p>'
      }
      if (requestDataValue === null) {
        errorHtml += '<p>Select Request Data Type</p>'
      }
      if (errorHtml !== '') {
        errorControl.innerHTML = errorHtml;
        errorControl.classList.remove("hide-element")
        return;
      }
      errorControl.innerHTML = '';
      errorControl.classList.add("hide-element")
      setRequestData(() => ({ requestType: requestTypeValue.id, requestDataType: requestDataValue.id }))
      editPanel.classList.add("hide-element");
      displayPanel.classList.remove("hide-element");
      event.target.innerText = "Edit";
      
      document.getElementById("selectedReqType").innerText = getRequestTypeNameFromId(requestTypeValue.id, 'reqtype');
      document.getElementById("selectedReqDataType").innerHTML = getRequestTypeNameFromId(requestDataValue.id, 'reqdatatype');
      document.getElementById("uploadDataTab").classList.add('active');
      document.getElementById("uploadDataTab").nextElementSibling.style.display = "block";

    } else {
      editPanel.classList.remove('hide-element');
      displayPanel.classList.add('hide-element');
      document.getElementById("uploadDataTab").classList.remove('active')
      document.getElementById("uploadDataTab").nextElementSibling.style.display = "none";
      event.target.innerText = "Next"

    }

  }

  const handleOnClickUploadData = async (event) => {
    var file = document.querySelector('#inputFile').files[0]
    var data = await ProcessRequest(
      requestData.requestType,
      requestData.requestDataType,
      "testUser",
      file)
    setUploadedData(data);
    document.getElementById("verifyDataTab").classList.add('active');
    document.getElementById("verifyDataTab").nextElementSibling.style.display = "block";

  }

  async function ProcessRequest(requestType, requestData, userName, file) {

    try {
      const response = await axios.post('http://20.242.53.236:8089/verify_data', {
        request_type: requestType,
        request_data: requestData,
        username: userName,
        file: file
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )
      if (response.status == 200) {
        return await response.data.VerifyData;
      }
    } catch (err) {
      console.error(err);
    }

  }

  async function ProcessForResult(requestType,requestData,userName,requestID) {
    try {
      const response = await axios.post('http://20.242.53.236:8089/upload_data', {
        request_type: requestType,
        request_data: requestData,
        username: userName,
        request_id: requestID
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status == 200) {
        return await response.data.VerifyData;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnClickVerifyData = (event) => {
    navigate("/Results" , { state: {  requestType : 'simple', requestData : 'with_latlong' ,userName : 'raghu' ,requestID : '72a26926-3416-4c9d-b3c4-1174d4729f44' } });
  }

  return (
    <Wrapper>
      <button id="requestDataTab" className="accordion">Select Type of Request</button>
      <div className="panel">
        <div id="editPanel" className="edit-panel">
          <div id="info-band-1" className="info-band hide-element">
            <p>Please select type of request and type of request data to proceed further</p>
          </div>
         <ChoiceControl data={RequestType} name="request-type" />
          <p className="subheading">Select type of data</p>
          <ChoiceControl data={RequestDataType} name="request-datatype" />
        </div>
        <div className="flex2ItemsSpaceBetween" style={{ display:'none'}} >
          <div id="displayPanel" className='hide-element' >
            <ul id="selected-data-1" className="selected-data">
              <li className='fs18'><FontAwesomeIcon icon={faSquareCheck} size="lg" transform="left-10" fixedWidth /><div id="selectedReqType" style={{ display : 'inline'}} ></div></li>
              <li className='fs18'><FontAwesomeIcon icon={faSquareCheck} size="lg" transform="left-10" fixedWidth /><div id="selectedReqDataType"  style={{ display : 'inline'}}  ></div></li>
            </ul>
          </div>
          <div>
            <Button2 text="Next" onClick={handleOnClickRequestData} />
          </div>
        </div>
      </div>

      <button id="uploadDataTab" className="accordion">Upload Data</button>
      <div className="panel">
        <div className="flex2ItemsSpaceBetween">
          <p className='fs18' > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.</p>
          <form action="http://20.242.53.236:8089/sample_file" method="post" >
            <button>Download</button>
          </form>
        </div>
        <div className='flex2ItemsSpaceBetween' >
          <input type="hidden" id="hiddenInputRequestType" name="request_type" value={requestData.requestType} />
          <input type="hidden" id="hiddenInputRequestDataType" name="request_data" value={requestData.requestDataType} />
          <input type="file" className="btn-upload-data" id="inputFile" name="filename"></input>
          <Button2 text="Next" onClick={handleOnClickUploadData} />
        </div>
      </div>

      <button id="verifyDataTab" className="accordion">Verify Data</button>
      <div className="panel">
        {uploadedData &&
          <div className="container fs18">
            <div className="row">
              <div className="col-6">No. of Locations </div>
              <div className="col-2">{uploadedData.NumberofLocations}</div>
              <div className="col-2"></div>
            </div>
            <div className="row" style={{ color: uploadedData.ContainsLocationID ? 'green' : 'red' }} >
              <div className="col-6">Contain Location ID ? (Required)</div>
              <div className="col-2">{uploadedData.ContainsLocationID ? "YES" : "NO"}</div>
              <div className="col-2">{uploadedData.ContainsLocationID ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faCircleXmark} />}</div>
            </div>
            <div className="row" style={{ color: uploadedData.ContainsLatLog ? 'green' : 'red' }}>
              <div className="col-6">Contain Latitude-Longitude ? (Required)</div>
              <div className="col-2">{uploadedData.ContainsLatLog ? "YES" : "NO"}</div>
              <div className="col-2">{uploadedData.ContainsLatLog ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faCircleXmark} />}</div>
            </div>
            <div className="row" style={{ color: uploadedData.ContainsLocationName ? 'green' : 'red' }}>
              <div className="col-6">Contain Location Name ? (Optional)</div>
              <div className="col-2">{uploadedData.ContainsLocationName ? "YES" : "NO"}</div>
              <div className="col-2">{uploadedData.ContainsLocationName ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faCircleXmark} />}</div>
            </div>
            <br />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Location Name (optional)</th>
                </tr>
              </thead>
              <tbody>
                {uploadedData.latlngDetails.map(item => <tr key={item.locationName}>
                  <td>{item.latitude}</td>
                  <td>{item.longitude}</td>
                  <td>{item.LocationName}</td>
                </tr>)}
              </tbody>
            </table>
            <div className="flex-row-reverse" >
              <Button2 text="Proceed For Result" onClick={handleOnClickVerifyData} />
            </div>
          </div>
        }
      </div>

    </Wrapper>


  )
}



export default RequestForm

const Wrapper = styled.div`
.selected-data{
    color: var(--clr-green-dark);  
    padding-left : 0;
  }
  .selected-upload-data{
    color: var(--clr-primary-4);
  }

  .btn-upload-data{
    width: fit-content;
    padding: 5px;
    border-radius: var(--radius);
    background-color: white;
    margin: 10px 0;
  }

  .fa-pull-margin-3{
    margin-right: 5px;
  }

  .request-heading > p{
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
  }


.accordion {
    background-color: var(--clr-primary-7);
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    transition: 0.4s;
    margin: 10px 0;
    border-radius: var(--radius);
  }
  
  .subheading{
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 0 0;
  }

  
  .active, .accordion:hover {
    background-color:var(--clr-primary-9); 
  }
  
  .panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
  }

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

/* info-band styles begin*/
.info-band{
  background-color: var(--clr-red-light);
  border-radius: var(--radius); 
  font-size:large;
  padding: 10px;
}

.info_band_hide {
  -moz-animation: cssAnimation 0s ease-in 5s forwards;
  /* Firefox */
  -webkit-animation: cssAnimation 0s ease-in 5s forwards;
  /* Safari and Chrome */
  -o-animation: cssAnimation 0s ease-in 5s forwards;
  /* Opera */
  animation: cssAnimation 0s ease-in 5s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  display: block;
}
@keyframes cssAnimation {
  to {
    width: 0;
    height: 0;
    overflow: hidden;
    padding: 0px;
  }
}
@-webkit-keyframes cssAnimation {
  to {
    width: 0;
    height: 0;
    visibility: hidden;
    padding: 0px;
  }
}
/* info-band styles end*/

/************************* */
.panel-requestdata {
  display: flex; 
  flex-direction: column;
  margin:25px 0 0 0;
  padding:0;
  height: fit-content;
  width: 100%;
}

.panel-requestdata li {  
 margin:5px 0 0 5px;
 width:fit-content;  
 height:40px;
}

.panel-requestdata label, .panel-requestdata input {
 display:inline-block;
 height: auto;   
}

.panel-requestdata input[type="radio"] {
 opacity:0;
}

.panel-requestdata input[type="radio"]:checked + label {
  background:var(--clr-primary-4);
}

.panel-requestdata label {
  padding:5px;
  border:1px solid #CCC; 
  cursor:pointer;
}

.panel-requestdata label:hover {
  background:#DDD;
}
/**upload data***/
.upload-paragraph{
  display: grid;
  grid-template-columns: 70% 1fr;
  column-gap: 5px;
}


.upload-paragraph > div {
  text-align: center;
}

.upload-paragraph > div > a {
    color: var(--clr-primary-4);
    align-self:center;
    display: block;
    height: 20px;
    position: relative;
    margin: -20px -50px;
    top: 50%;
}

h4{
  margin: 20px 0;
}

h2{
  margin: 15px 0;
}

.flex2ItemsSpaceBetween{
  display : flex;
  flex-direction : row;
  justify-content: space-between;
}

.flex-row-reverse{
  display : flex;
  flex-direction : row-reverse;
}

`