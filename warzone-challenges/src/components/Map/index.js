import React from 'react';
import L from 'leaflet';
import styled from 'styled-components';

const Wrapper = styled.div`
   width: ${props => props.width};
   height: ${props => props.height};
`;


 export default class Map extends React.Component{
   componentDidMount(){
     var bounds = [[50,-30], [-45,100]];
     this.map = L.map('map', {
       center:[5,37.5],
       zoom:4,
       maxZoom:8,
       minZoom:4,
       maxBounds:[ [ 50, -30 ], [ -45, 100 ] ]
     });
     //this.map.setMinZoom(this.map.getBoundsZoom([[0,85],[0,85]], true) );
     var sol = L.latLng([ 5, 37.5]);
     L.marker(sol).addTo(this.map);
     L.imageOverlay('https://assets.rockpapershotgun.com/images/2020/03/Verdansk-3k-1212x1212.jpg', bounds).addTo(this.map);
   }

   render(){
     return <Wrapper width="1212px" height="1212px" id="map" />
   }
 }
