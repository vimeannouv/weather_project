import React, { useEffect, useState, type KeyboardEvent } from "react";
import styles from "./TopBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "@react-spring/web";
interface Props {
  onSearchEnter?: (
    ev: KeyboardEvent<HTMLInputElement>,
    searchFailed: () => void,
  ) => void;
  child?: React.ReactNode;
}

const INPUT_FALLBACK_DISPLAY_TIME = 2.3

const TopBar = ({ onSearchEnter }: Props) => {
  const [failure, setFailure] = useState(false);
  const slideSpring = useSpring({
    opacity: failure ? 1 : 0,
    marginLeft: failure ? "0px" : "100px",
    config: (key) => {
      if (key == "opacity") {
        return { friction: 1, tension: 30, mass: 0.1, clamp: true };
      }
      return { friction: 1.4, tension: 50, mass: 0.1 };
    },
  });
  const searchFailedCallback = () => {
    console.log(
      "//////////////// Failure to find location -- initiating warning --",
    );
    setFailure(true);
  };

  useEffect(() => {
    if (!failure) return;
    const reset = setInterval(() => {
      setFailure(false);
    }, INPUT_FALLBACK_DISPLAY_TIME * 1000);

    return () => {
      clearInterval(reset);
    };
  }, [failure]);

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
                  onSearchEnter(ev, searchFailedCallback);
                }
              }
            }}
          />
        </div>
      </div>
      <animated.div className={styles.fallbackMessage} style={slideSpring}>
        <p>
          <span className="badge text-bg-secondary bg-danger">
            Invalid request! Please try another location!
          </span>
        </p>
      </animated.div>
    </div>
  );
};

export default TopBar;
