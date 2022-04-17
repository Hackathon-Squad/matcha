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
<<<<<<< HEAD
        longitude: -117.2936107,
        latitude: 32.854644,
      },
      {
        type: "boba",
        longitude: -117.2242428,
        latitude: 32.8674499,
      },
      {
        type: "ice_cream",
        longitude: -117.2242428,
        latitude: 32.8674475,
=======
        longitude: -117.2891124,//-117.23754811641379,
        latitude: 32.8632617,//32.881287611627904,
      },
      {
        type: "boba",
        longitude: -117.2242428,//-117.2365382,
        latitude: 32.8674499,//32.8810575,
      },
      {
        type: "ice_cream",
        longitude: -117.7951425,//-117.23856864,
        latitude: 32.9524167,//32.88141086,
>>>>>>> feat: idk misc changes to map
      },
    ]);
    // temp, for testing
    // setTimeout(() => {
    //   map?.flyTo?.({ center: [-117, 33], essential: true });
    // }, 5000);
  }, []);

  return (
    <>
      <Navbar />
      <Map />
    </>
  );
};

export default MapPage;
