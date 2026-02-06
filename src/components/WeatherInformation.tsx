import shared from "./shared/shared.module.css"
import styles from "./WeatherInformation.module.css"

const WeatherInformation = () => {
  return (
    <div className={`${shared.layout} ${styles.layout}`}>
        <div className={`${shared.display} ${styles.graphDisplay}`}>
            <h1>weather</h1>
            <h2>hi</h2>
        </div>
        <div><p>hi</p></div>
    </div>
  )
}

export default WeatherInformation