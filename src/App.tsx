import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState, type KeyboardEvent } from "react";

interface WeatherState {
  temperature?: number;
  weatherCode?: number;
}

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState<WeatherState>({});
  const [hourlyWeather, setHourlyWeather] = useState<WeatherState[]>([]);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    countryName: null,
    cityName: null,
  });

  const fetchWeather = async (latitude: string, longitude: string) => {
    const apiEndpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code`;
    try {
      const data = await fetch(apiEndpoint);
      if (!data.ok)
        return new Error(
          `open meteo failed to fetch from coords : (${latitude}, ${longitude})`,
        );
      const info = await data.json();
      return info;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurrentLocation = async () => {
    const apiEndpoint = "https://geoapi.info/api/geo";
    try {
      const data = await fetch(apiEndpoint);

      if (!data.ok) throw new Error("current location response is invalid");
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
      if (!data.ok) throw new Error("input location response is invalid");
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
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  // effects //

  // setting the states after new location has been entttered
  useEffect(() => {
    console.log("#~~~~~~~~~~\n", location, "\n#~~~~~~~~~~\n");
    const lat = location.latitude as unknown as string;
    const long = location.longitude as unknown as string;
    if (!lat || !long) return console.log("latitude and longitude are null.");
    fetchWeather(lat, long).then((info) => {
      // current weather
      const currentWeather = info.current;
      const currentTemp = currentWeather.temperature_2m;
      const weatherCode = currentWeather.weather_code;
      setCurrentWeather({
        temperature: currentTemp,
        weatherCode: weatherCode,
      });

      // hourly temp
      const hourlyWeather = info.hourly 
      const hourlyTime = hourlyWeather.time

      for (const time of hourlyTime) {
        console.log(time)
      }

      setLoading(false);
    });
  }, [location]);

  // get city closest to client
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
    });
  }, []);

  // component //
  return (
    <div className="layout">
      <TopBar onSearchEnter={onSearchInputEntered} />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <p>{location.cityName + " " + location.countryName}</p>
          <p>{currentWeather.temperature}</p>
        </div>
      )}
    </div>
  );
};

export default App;
