import React, { type KeyboardEvent } from "react";
import styles from "./TopBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onSearchEnter?: (ev: KeyboardEvent) => void;
}

const TopBar = ({ onSearchEnter }: Props) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.locationInput}>
        <div className="input-group">
          <span className="input-group-text" id="addon-wrapping">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Location"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onKeyDown={(ev) => {
              if (ev.key == "Enter") {
                if (onSearchEnter) {
                    onSearchEnter(ev)
              }

              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
