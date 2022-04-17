import { useEffect } from 'react';
import { type NextPage } from 'next';

import Map from '@/components/Map';
import { useMapContext } from '@/context/MapContext';
import Navbar from '@/components/Navbar';

const MapPage: NextPage = () => {
  const { map, setLocations } = useMapContext();

  useEffect(() => {
    setLocations([
      {
        type: 'coffee',
        longitude: -117.23754811641379,
        latitude: 32.881287611627904,
      },
      {
        type: 'boba',
        longitude: -117.2365382,
        latitude: 32.8810575,
      },
      {
        type: 'ice_cream',
        longitude: -117.23856864,
        latitude: 32.88141086,
      },
    ])
    // temp, for testing
    setTimeout(() => {
      map?.flyTo?.({ center: [-117, 33], essential: true });
    }, 5000)
  }, [])

  return (
    <>
      {/* <Navbar /> */}
      <Map />
    </>
  );
}

export default MapPage;