import {useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { v4 } from 'uuid';
import styled from 'styled-components'
import './App.css';
import OutlinedCard from './components/card';
import { Location } from '../src/types';


const URL = 'https://www.vaccinespotter.org/api/v0/states/NY.json';
const tileurl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
const tileAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const StyledDiv = styled.div`
  height:100vh;
  width: 100vw;
`

function App() {
  const [locations, setLocations] = useState<Location[]>()
  const getData = async () => {
    const data = await fetch(URL)
    return data.json()
  }

  useEffect(() => {
    getData().then(data => {
      const {features} = data;
      setLocations(features.slice(0,100).map((feature : any) => {
        return {geometry:feature.geometry, properties:feature.properties}
      }))
    })
  },[])

  return (
    <StyledDiv>
      <MapContainer
        className='leaflet-map' 
        center={[40.713051,-74.007233]} 
        zoom={7} 
        scrollWheelZoom={true}
        doubleClickZoom={true}
      >
        <TileLayer
          url={tileurl}
          attribution={tileAttribution}
        />
        {locations?.map(location => (
          <Marker 
            key={v4()}
            position={[location.geometry.coordinates[1], location.geometry.coordinates[0]]}
          >
            <Popup>
                <OutlinedCard content={location} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </StyledDiv>
  );
}

export default App;
  