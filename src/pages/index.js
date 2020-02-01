import React from "react";

import Home from "#/components/containers/Home";
import About from "#/components/containers/About";
import Experience from "#/components/containers/Experience";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ location, data }) => (
  <Layout>
    <SEO title={"Felipe Fernandes Diogo | Software Engineer"} />
    <Home />
    <About />
    {/* <Experience /> */}
  </Layout>
);

// export const query = graphql`
//   home
// `;

export default IndexPage;
