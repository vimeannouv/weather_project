import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import LoadingScreen from "./components/LoadingScreen";
import { useState, type KeyboardEvent } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [location, setLocation] = useState("");

  const fetchCurrentLocation = () => {
    fetch("https://geoapi.info/api/geo")
      .then((data) => {
        if (!data.ok) return new Error("current location response is invalid");
        return data.json();
      })
      .then((info) => {
        console.log(info);
      })
      .catch((err) => {
        console.log(
          err || "there has been an issue fetching the current location data",
        );
      });
  };
  fetchCurrentLocation()
  const onSearch = (ev: KeyboardEvent) => {
    setLoading(true);
    console.log(ev.target);
  };

  return (
    <div className="layout">
      <TopBar onSearchEnter={onSearch} />
      {isLoading ? <LoadingScreen /> : <p>hello</p>}
    </div>
  );
};

export default App;
