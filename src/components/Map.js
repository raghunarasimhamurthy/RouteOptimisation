import React from 'react'
import styled from 'styled-components'

export default function Map() {
  return (
    <Wrapper>
           <div id="map"></div>  
           
    </Wrapper>
  )
}

// function initMap(MapData) {
//     const directionsService = new google.maps.DirectionsService();
//     const directionsRenderer = new google.maps.DirectionsRenderer();
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 6,
//       center: { lat: 12.979542, lng: 77.591138 },
//     });
  
//     directionsRenderer.setMap(map);
//     calculateAndDisplayRoute(directionsService, directionsRenderer , MapData);
//   }
  
//   function calculateAndDisplayRoute(directionsService, directionsRenderer,mapData) {
//     const _origin = mapData?.Origin;
//     const _destination = mapData?.Destination;
//     const _waypoints = mapData?.Waypoints;

//     const waypts = [];
  
//     for (let i = 0; i < _waypoints.length; i++) {
//        waypts.push({
//           location: _waypoints[i],
//           stopover: true,
//         });      
//     }

//     directionsService
//       .route({
//         origin: _origin,
//         destination: _destination,
//         waypoints: waypts,
//         optimizeWaypoints: true,
//         travelMode: google.maps.TravelMode.DRIVING,
//       })
//       .then((response) => {
//         directionsRenderer.setDirections(response);  
//       })
//       .catch((e) => window.alert("Directions request failed due to "+ e.name +" "+e.message));
//   }
  
//   window.initMap = initMap;


const Wrapper = styled.div`
#container {
    height: 100%;
    display: flex;
  }
  
  #sidebar {
    flex-basis: 0;
    flex-grow: 2;
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
  
  #map {
    flex-basis: 0;
    flex-grow: 2;
    height: 50%;
  }
  
  #directions-panel {
    margin-top: 10px;
  }
  
  #waypoints{
      height: 200px;
  }
`