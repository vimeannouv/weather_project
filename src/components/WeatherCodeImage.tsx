import { WiDayCloudy, WiRain } from "react-icons/wi";
import { WiSmoke } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import style from "./WeatherCodeImage.module.css";
import type { JSX } from "react";
interface Props {
  weatherCode?: number | string;
  hideMessage?: boolean
}

// got this from ai --> ai handles the automation so my life is easier.
const weatherMap: Record<string, { icon: JSX.Element; label: string }> = {
  "0": { icon: <WiDaySunny />, label: "Clear skies" },
  "1": { icon: <WiDaySunny />, label: "Mainly clear" },
  "2": { icon: <WiDayCloudy />, label: "Partly cloudy" },
  "3": { icon: <WiDayCloudy />, label: "Overcast" },
  "45": { icon: <WiSmoke />, label: "Foggy" },
  "48": { icon: <WiSmoke />, label: "Depositing rime fog" },
  "51": { icon: <WiRain />, label: "Light drizzle" },
  "53": { icon: <WiRain />, label: "Moderate drizzle" },
  "55": { icon: <WiRain />, label: "Dense drizzle" },
  "56": { icon: <WiRain />, label: "Freezing drizzle" },
  "57": { icon: <WiRain />, label: "Freezing drizzle" },
  "61": { icon: <WiRain />, label: "Slight rain" },
  "63": { icon: <WiRain />, label: "Moderate rain" },
  "65": { icon: <WiRain />, label: "Heavy rain" },
  "66": { icon: <WiRain />, label: "Freezing rain" },
  "67": { icon: <WiRain />, label: "Freezing rain" },
  "71": { icon: <WiSnow />, label: "Slight snow" },
  "73": { icon: <WiSnow />, label: "Moderate snow" },
  "75": { icon: <WiSnow />, label: "Heavy snow" },
  "77": { icon: <WiSnow />, label: "Snow grains" },
  "80": { icon: <WiRain />, label: "Slight showers" },
  "81": { icon: <WiRain />, label: "Moderate showers" },
  "82": { icon: <WiRain />, label: "Violent showers" },
  "85": { icon: <WiSnow />, label: "Slight snow showers" },
  "86": { icon: <WiSnow />, label: "Heavy snow showers" },
  "95": { icon: <WiThunderstorm />, label: "Thunderstorm" },
  "96": { icon: <WiThunderstorm />, label: "Thunderstorm w/ hail" },
  "99": { icon: <WiThunderstorm />, label: "Thunderstorm w/ heavy hail" }
};


// these are written by me
const WeatherCodeImage = ({ weatherCode, hideMessage = false }: Props) => {
  if (!weatherCode) {
    weatherCode = 1;
  }
  const code = String(weatherCode ?? 1) as string
  const entry = weatherMap[code]

  return (

    <div className={style.weatherIconBlock}>

      <div className={style.icon}>
        {entry && (<div className={style.icon}>
          {entry.icon}
        </div>)}
      </div>
      {!hideMessage && (<div className={style.icon}>
        <p>{entry.label}</p>
      </div>)}
    </div>

  );
};

export default WeatherCodeImage;
