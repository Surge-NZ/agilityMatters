import React from "react";
import Header from "../components/header";
import Teams from "../components/teams";

const TeamsPage = () => {
  return (
    <>
      <Header
        title="High Performance Teams"
        content="Unleashing the power of Teamwork to achieve exceptional results"
      />
      <Teams />
    </>
  );
};

export default TeamsPage;
