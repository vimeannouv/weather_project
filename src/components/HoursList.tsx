import React from "react";
import styles from "./HoursList.module.css";
import { type SpringValues, animated } from "react-spring";
interface Props {
  children?: React.ReactNode;
}

const HoursList = ({ children}: Props) => {
  return (
    <animated.div className={`${styles.layout}`}>
      <div className={styles.display}>
        <ul className={styles.scrollContainer}>{children}</ul>
      </div>
    </animated.div>
  );
};

export default HoursList;
