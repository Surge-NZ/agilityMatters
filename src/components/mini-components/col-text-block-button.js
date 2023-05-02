import React from "react";
import { Link } from "gatsby";
import * as styles from "./col-text-block-button.module.css";

const ColTextBlockButton = ({
  title,
  paragraph,
  quoteText,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
      <blockquote className={styles.blockquote}>{quoteText}</blockquote>
      <Link className={styles.linkTo} to={buttonLink}>
        <button className={styles.button}>{buttonText}</button>
      </Link>
    </div>
  );
};

export default ColTextBlockButton;
