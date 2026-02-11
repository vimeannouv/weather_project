import React from "react";
import style from "./CurrentWeather.module.css";

interface Props {
  children: React.ReactNode;
  color: string
}

const CurrentWeather = ({ children, color }: Props) => {
  return (
    <div className={style.layout} style={{color: color}}>
      {children}
    </div>
  );
};

export default CurrentWeather;
