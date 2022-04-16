import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = () => {

	const [viewport, setViewport] = useState({
		width: "100vw",
		height: "90vh",
		latitude: 38.6839, //center.lat,
		longitude: -121.15234, //center.lng,
		zoom: 11.1956

	});

	return (
		<ReactMapGL
			onViewportChange={setViewport}
			mapboxAccessToken={MAPBOX_TOKEN}
			mapStyle="mapbox://styles/mapbox/streets-v11"
		/>

	);
}

export default MapComponent;