import React from "react";

import Home from "#/components/containers/Home";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ location, data }) => (
  <Layout>
    <SEO title={"Felipe Fernandes Diogo | Software Engineer"} />
    <Home />
  </Layout>
);

// export const query = graphql`
//   home
// `;

export default IndexPage;
