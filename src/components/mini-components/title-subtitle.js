import React from "react";
import PropTypes from "prop-types";
import * as styles from "./title-subtitle.module.css";

const TitleSubtitle = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.subtitle}>{subtitle}</h4>
    </div>
  );
};

TitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TitleSubtitle;
