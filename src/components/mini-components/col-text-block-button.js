import React from "react";
import { Link } from "gatsby";
import * as styles from "./col-text-block-button.module.css";

const ColTextBlockButton = ({ title, paragraph, quoteText, buttons }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
      {quoteText && (
        <blockquote className={styles.blockquote}>{quoteText}</blockquote>
      )}
      {buttons &&
        buttons.map((button, index) => (
          <Link className={styles.linkTo} to={button.link} key={index}>
            <button className={styles.button}>{button.text}</button>
          </Link>
        ))}
    </div>
  );
};

ColTextBlockButton.defaultProps = {
  buttons: [],
  quoteText: "",
};

export default ColTextBlockButton;
