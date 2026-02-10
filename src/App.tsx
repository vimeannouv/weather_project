import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState, type KeyboardEvent } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    countryName: null,
    cityName: null,
  });

  const fetchWeather = (latitude: number, longitude: number) => {};

  const fetchCurrentLocation = async () => {
    const apiEndpoint = "https://geoapi.info/api/geo";
    try {
      const data = await fetch(apiEndpoint);

      if (!data.ok) return new Error("current location response is invalid");
      const info = await data.json();
      return info.location;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLocationFromCityName = async (cityName: string) => {
    const apiEndpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}`;
    try {
      const data = await fetch(apiEndpoint);
      if (!data.ok) return new Error("input location response is invalid");
      const info = await data.json();
      return info;
    } catch (err) {
      console.log(err);
    }
  };

  // events //
  const onSearchInputEntered = (ev: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = ev.currentTarget.value;
    const cityName = inputValue.trim();
    if (cityName.length <= 2) return;
    console.log("querying for: " + cityName);
    setLoading(true);
    fetchLocationFromCityName(cityName)
      .then((info) => {
        if (!info.results) throw new Error(`No results of ${cityName}`);
        return info.results;
      })
      .then((results) => {
        const bestResult = results[0];
        const lat = bestResult.latitude;
        const long = bestResult.longitude;
        const cityName = bestResult.name;
        const countryName = bestResult.country;
        setLocation({
          latitude: lat,
          longitude: long,
          cityName: cityName,
          countryName: countryName,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // effects //
  useEffect(() => {
    console.log("#~~~~~~~~~~\n", location, "\n#~~~~~~~~~~\n");
    const lat = location.latitude;
    const long = location.longitude;
  }, [location]);

  // on init //
  useEffect(() => {
    setLoading(true);
    fetchCurrentLocation().then((location) => {
      const coords = location.coordinates;
      const lat = coords.latitude;
      const long = coords.longitude;
      const countryName = location.countryName;
      const cityName = location.city;
      setLocation({
        latitude: lat,
        longitude: long,
        countryName: countryName,
        cityName: cityName,
      });
      setLoading(false);
    });
  }, []);

  // component //
  return (
    <div className="layout">
      <TopBar onSearchEnter={onSearchInputEntered} />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <p>{location.cityName + " " + location.countryName}</p>
      )}
    </div>
  );
};

export default App;
