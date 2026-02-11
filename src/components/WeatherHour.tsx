import React from "react";
import styles from "./WeatherHour.module.css";

interface Props {
  children?: React.ReactNode;
  key: number;
}

const WeatherHour = ({ children, key }: Props) => {
  return (
    <li className={styles.display} key={key}>
      {children}
    </li>
  );
};

export default WeatherHour;
