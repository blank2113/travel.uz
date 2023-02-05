import classes from "./map.module.css";
import {
  YMaps,
  Placemark,
  Map,
  GeolocationControl,
  RouteButton,
  RoutePanel,
} from "@pbe/react-yandex-maps";

const Maps = () => {
  return (
    <div className={classes.inner}>
      <YMaps className="ymap">
        <Map
          defaultState={{
            center: [39.7698715, 64.4207312],
            zoom: 17,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          style={{
            width: "100%",
            height: "50vh",
            borderRadius: "20px",
          }}
          className="as"
        >
          <RoutePanel options={{ float: "right" }} />
          <RouteButton options={{ float: "right" }} />
          <GeolocationControl options={{ float: "left" }} />
          <Placemark geometry={[39.7698715, 64.4207312]} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;
