import { type AppProps } from "next/app";
import { UserProvider } from "@/context/UserContext";

import "@/styles/index.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapProvider } from "@/context/MapContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MapProvider>
        <Component {...pageProps} />
      </MapProvider>
    </UserProvider>
  );
}

export default MyApp;
