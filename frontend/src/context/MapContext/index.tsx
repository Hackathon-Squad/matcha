import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Map } from 'mapbox-gl'

import { debounce } from '@/utils/debounce';
import { loadLayers, type Location } from "./loadLayers";

interface MapContextData {
  map: Map | null;
  setMap: Dispatch<SetStateAction<Map | null>>;
  locations: Location[];
  setLocations: Dispatch<SetStateAction<Location[]>>;
}

const MapContext = createContext<MapContextData | undefined>(undefined);

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMapContext must be used in a MapProvider");
  }
  return context;
};

interface MapProviderProps {
  children?: ReactNode;
}

export const MapProvider = ({ children }: MapProviderProps) => {
  const [map, setMap] = useState<Map | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    console.log('map effect triggered', { map, locations })
    if (map) {
      debounce(loadLayers, 2000)(map, locations);
    }
  }, [map, locations])

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        locations,
        setLocations,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
