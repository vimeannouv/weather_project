import styles from "./LocationList.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LocationList = () => {
  return (
    <div className={`${styles.layout}`}>
      <div className={`${styles.display} ${styles.insideLayout}`}>
        <div className="input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onKeyDown={(ev) => {
              if (ev.key != "Enter") {
                return
              }
              console.log("yess!");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationList;
