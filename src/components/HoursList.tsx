import React from "react";
import styles from "./HoursList.module.css";

interface Props {
  children?: React.ReactNode;
}

const HoursList = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.display}>
        <ul className={styles.scrollContainer}>{children}</ul>
      </div>
    </div>
  );
};

export default HoursList;
