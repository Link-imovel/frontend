import React from 'react';
import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const Map = ({ coordinates }: { coordinates?: number[] }) => {
  const [coord, setCoord] = React.useState<number[]>();

  React.useEffect(() => {
    if (coordinates && coordinates[0] && coordinates[1]) {
      setCoord([coordinates[1] as number, coordinates[0] as number]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMap = React.useCallback((coord) => {
    if (coord) {
      return (
        <MapContainer
          center={coord}
          zoom={20}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coord} />
        </MapContainer>
      );
    }
    return null;
  }, []);

  return renderMap(coord);
};

export default Map;
