import { WiDayCloudy, WiRain } from "react-icons/wi";
import { WiSmoke } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import style from "./WeatherCodeImage.module.css";
interface Props {
  weatherCode?: number | string;
}

const WeatherCodeImage = ({ weatherCode }: Props) => {
  if (!weatherCode) {
    weatherCode = 1;
  }
  const numberedWeatherCode = Number(weatherCode) as number;

  const weatherCodeIs = (min: number, max: number) => {
    return numberedWeatherCode >= min && numberedWeatherCode <= max;
  };

  weatherCode = String(weatherCode);
  return (
    <div className={style.icon}>
      {/* mainly clear */}
      {weatherCodeIs(0, 1) && (
        <div className={style.weatherIconBlock}>
          <WiDaySunny />
          <p>Clear skies</p>
        </div>
      )}
      {/* // kinda cloudy */}
      {weatherCodeIs(2, 3) && <div className={style.weatherIconBlock}>
          <WiDayCloudy/>
          <p>Cloudy skies</p>
        </div>}
      {/* // fog */}
      {weatherCodeIs(45, 48) && <div className={style.weatherIconBlock}>
          <WiSmoke/>
          <p>Foggy--Take car while driving</p>
        </div>}
      {/* // drizzle */}
      {weatherCodeIs(47, 48) && <div className={style.weatherIconBlock}>
          <WiRain/>
          <p>Drizzle</p>
        </div>}
      {/* // rain */}
      {weatherCodeIs(61, 67) && <div className={style.weatherIconBlock}>
          <WiRain/>
          <p>Rain</p>
        </div>}
      {/* // snow */}
      {weatherCodeIs(71, 77) && <div className={style.weatherIconBlock}>
          <WiSnow/>
          <p>Snow</p>
        </div>}
      {/* // showers */}
      {weatherCodeIs(80, 86) && <div className={style.weatherIconBlock}>
          <WiRain/>
          <p>Showers</p>
        </div>}
      {/* // thunder storms */}
      {weatherCodeIs(95, 99) && <div className={style.weatherIconBlock}>
          <WiThunderstorm/>
          <p>Storm</p>
        </div>}
    </div>
  );
};

export default WeatherCodeImage;
