// import clsx from "clsx"
import { Link } from "gatsby";
import React, { Fragment, memo } from "react";
// import { Heading } from "../ui"
// import * as classes from "./styles.module.scss";

interface CategoryProps {
  categoryList: any;
  activeSlug: string;
}

const Category = memo((props: CategoryProps) => {
  const { categoryList, activeSlug } = props;

  const sortArray = (array) => {
    let result = [...array];
    const index = result?.findIndex((item) => item?.node?.name === "All");
    if (index !== -1) {
      const temp = result[0];
      result[0] = result[index];
      result[index] = temp;
    }
    return result;
  };

  return (
    <Fragment>
      <Heading as="h1" className={classes.heading}>
        Latest Updates
      </Heading>
      <div className={classes.container}>
        {sortArray(categoryList)?.map((item, index) => {
          return (
            <Link
              className={clsx(classes.button, {
                [classes.active]: activeSlug === item?.node?.slug,
              })}
              key={index}
              to={`/blog/${item?.node?.slug}`}
            >
              {item?.node?.name}
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
});

export default Category;
