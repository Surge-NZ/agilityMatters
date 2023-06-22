import React from "react";
import ColTextBlockButton from "../components/mini-components/col-text-block-button";

const Downloads = () => {
  return (
    <>
      <ColTextBlockButton
        title="Downloads"
        paragraph="Here you can find resouces mentioned in the book."
        buttons={[
          { text: "Download Item 1", link: "/downloads" },
          { text: "Download Item 2", link: "/downloads" },
          { text: "Download Item 3", link: "/downloads" },
          { text: "Download Item 4", link: "/downloads" },
          { text: "Download Item 5", link: "/downloads" },
        ]}
      />
    </>
  );
};

export default Downloads;
