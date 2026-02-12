import { WiDayCloudy, WiRain } from "react-icons/wi";
import { WiSmoke } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import style from "./WeatherCodeImage.module.css";
interface Props {
  weatherCode?: number | string;
  hideMessage?: boolean
}

const WeatherCodeImage = ({ weatherCode, hideMessage = false }: Props) => {
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
      {(weatherCodeIs(0, 1)) && (
        <div className={style.weatherIconBlock}>
          <WiDaySunny />
          {!hideMessage && (<p>Clear skies</p>)}

        </div>
      )}
      {/* // kinda cloudy */}
      {(weatherCodeIs(2, 3)) && <div className={style.weatherIconBlock}>
        <WiDayCloudy />
        {!hideMessage && (<p>Cloudy skies</p>)}
        
      </div>}
      {/* // fog */}
      {(weatherCodeIs(45, 48)) && <div className={style.weatherIconBlock}>
        <WiSmoke />
        {!hideMessage && (<p>Foggy</p>)}
      </div>}
      {/* // drizzle */}
      {weatherCodeIs(47, 48) && <div className={style.weatherIconBlock}>
        <WiRain />
        {!hideMessage && (<p>Drizzle</p>)}
        
      </div>}
      {/* // rain */}
      {weatherCodeIs(61, 67) && <div className={style.weatherIconBlock}>
        <WiRain />
        
        {!hideMessage && (<p>Drizzle</p>)}
      </div>}
      {/* // snow */}
      {weatherCodeIs(71, 77) && <div className={style.weatherIconBlock}>
        <WiSnow />
        {!hideMessage && (<p>Snow</p>)}
      </div>}
      {/* // showers */}
      {weatherCodeIs(80, 86) && <div className={style.weatherIconBlock}>
        <WiRain />
        {!hideMessage && (<p>Showers</p>)}
      </div>}
      {/* // thunder storms */}
      {weatherCodeIs(95, 99) && <div className={style.weatherIconBlock}>
        <WiThunderstorm />
        {!hideMessage && (<p>Storm</p>)}
      </div>}
    </div>
  );
};

export default WeatherCodeImage;
