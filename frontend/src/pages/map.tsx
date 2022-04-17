import { useEffect } from 'react';
import { type NextPage } from 'next';

import Map from '@/components/Map';
import { useMapContext } from '@/context/MapContext';
import Navbar from '@/components/Navbar';

const MapPage: NextPage = () => {
  const { setLocations } = useMapContext();

  useEffect(() => {
    setLocations([{
      type: 'coffee',
      latitude: -117.23754811641379,
      longitude: 32.881287611627904,
    }])
  }, [])

  return (
    <>
      {/* <Navbar /> */}
      <Map />
    </>
  );
}

export default MapPage;