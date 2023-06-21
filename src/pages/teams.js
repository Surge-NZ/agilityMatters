import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Teams from "../components/teams";

const TeamsPage = () => {
  return (
    <Layout>
      <Header
        title='High Performance Teams'
        content='Unleashing the power of Teamwork to achieve exceptional results'
      />
      <Teams />
    </Layout>
  );
};

export default TeamsPage;
