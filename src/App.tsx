
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './App.css';
import styled from 'styled-components'

const tileurl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tileAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const StyledDiv = styled.div`
  height:100vh;
  width: 100vw;
`

function App() {
  return (
    <StyledDiv>
      <MapContainer className='leaflet-map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url={tileurl}
          attribution={tileAttribution}
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </StyledDiv>
  );
}

export default App;
  