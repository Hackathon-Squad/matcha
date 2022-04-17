import { useMapContext } from "@/context/MapContext";
import { memo } from "react";
import ReactMapboxGl from "react-mapbox-gl";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

const Map = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
});

const MapComponent = () => {
  const { setMap } = useMapContext();

  return (
    <Map
      style="mapbox://styles/mapbox/light-v10"
      zoom={[/* 11.1956 */ 16]}
      center={[-117.23754811641379, 32.881287611627904]}
      flyToOptions={{ speed: 2 }}
      pitch={[60]}
      containerStyle={{
        height: "100%",
        width: "100%",
        transition: ".5s",
      }}
      onStyleLoad={(map) => {
        setMap(map);
      }}
    />
  );
};

export default memo(MapComponent);
