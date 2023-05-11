import React ,{ useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export default function Results() {
    const { state } = useLocation();
    const { requestType, requestData ,userName ,requestID } = state;
    useEffect(()=>{
        const handler = async () =>{
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
                   var result = await response.data;
                   console.log(result);
                }
              } catch (error) {
                console.log(error);
              }
        }
        handler();
    },[])
  
    return (
        <div>
            <h2><strong>Optimization Result</strong></h2>
            <br />
            <h3>Type of Request</h3>
            <ul className="selected-data fs18 green-dark">
                <li><FontAwesomeIcon icon={faSquareCheck} size="lg" transform="left-10" fixedWidth />Simple Route Optimization</li>
                <li><FontAwesomeIcon icon={faSquareCheck} size="lg" transform="left-10" fixedWidth />Data contains latitude-Longitude</li>
            </ul>
            <h3>Upload Data</h3>
            <ul className="selected-upload-data fs18 ">
                <li><FontAwesomeIcon icon={faSquareCheck} size="lg" transform="left-10" fixedWidth />Route Optimisation file.xls</li>
            </ul>
            <h3>Optimisation Summary</h3>
            <table className="table table-borderless fs18">
                <tbody>
                    <tr>
                        <td>Number of Locations</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Distance before Optimisation</td>
                        <td>25km</td>
                    </tr>
                    <tr>
                        <td>Distance after Optimisation</td>
                        <td>18km</td>
                    </tr>
                    <tr>
                        <td>Total Distance Reduced</td>
                        <td>7km</td>
                    </tr>
                </tbody>
            </table>
            <h3>Optimisation Data <a href="#">Download In Excel</a> </h3>
            <table className="table table-striped fs18">
                <thead>
                    <tr>
                        <th>Location ID</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Location Name (optional)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>05</td>
                        <td>0.5813532132</td>
                        <td>0.785125552</td>
                        <td>Marathalli</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>0.532448945</td>
                        <td>0.4565464123</td>
                        <td>Brookfield</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>0.785646522</td>
                        <td>0.7335655555</td>
                        <td>Yeshwanthpur</td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>0.532448945</td>
                        <td>0.4565464123</td>
                        <td>Rajajinagar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


const Wrapper = styled.div`
.selected-data{
    color: var(--clr-green-dark);  
    padding-left : 0;
  }
  .selected-upload-data{
    color: var(--clr-primary-4);
  }
`