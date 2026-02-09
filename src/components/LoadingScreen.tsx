import React from "react";
import styles from "./LoadingScreen.module.css"

const LoadingScreen = () => {
  return (
    <div className={styles.layout}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
