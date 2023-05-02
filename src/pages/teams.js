import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Teams from "../components/teams";
import Footer from "../components/footer";

const TeamsPage = () => {
  return (
    <Layout>
      <Header
        title="High Performance Teams"
        content="Unleashing the power of Teamwork to achieve exceptional results"
      />
      <Teams />
      <Footer />
    </Layout>
  );
};

export default TeamsPage;
