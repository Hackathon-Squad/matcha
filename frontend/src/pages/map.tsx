import { useEffect } from "react";
import { type NextPage } from "next";

import Map from "@/components/Map";
import { useMapContext } from "@/context/MapContext";
import Navbar from "@/components/Navbar";

const MapPage: NextPage = () => {
  const { map, setLocations } = useMapContext();

  useEffect(() => {
    setLocations([
      {
        type: "coffee",
        longitude: -117.2321544,
        latitude: 32.8656116,
      },
      {
        type: "boba",
        longitude: -117.2242428,
        latitude: 32.8674499,
      },
      {
        type: "ice_cream",
        longitude: -117.2370285,
        latitude: 32.9524167,
      },
    ]);
    // temp, for testing
    setTimeout(() => {
      map?.flyTo?.({ center: [-117, 33], essential: true });
    }, 5000);
  }, []);

  return (
    <>
      <Navbar />
      <Map />
    </>
  );
};

export default MapPage;
