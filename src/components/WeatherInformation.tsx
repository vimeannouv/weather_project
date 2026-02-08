import styles from "./WeatherInformation.module.css";

const WeatherInformation = () => {
  return (
    <div className={`${styles.layout}`}>
      <div aria-label="currentWeatherDisplay" className={`${styles.display}`}>
        <p>hi</p>
      </div>
      <div className={`${styles.daysDisplay} ${styles.display}`}></div>
      <div
        aria-label="graphDisplay"
        className={`${styles.display} ${styles.graphDisplay}`}>
        <h1>weather</h1>
        <h2>hi</h2>
      </div>
    </div>
  );
};

export default WeatherInformation;
