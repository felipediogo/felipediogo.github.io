import React, { useState, useEffect } from "react";

import Home from "#/components/containers/Home";
import About from "#/components/containers/About";
import Loader from "#/components/containers/loader";
// import Experience from "#/components/containers/Experience";
import Header from "#/components/header";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ location, data }) => {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading || isHome) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
        }
      }, 0);
    }
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Layout>
      <SEO title={"Felipe Fernandes Diogo | Software Engineer"} />
      {isLoading && isHome ? (
        <Loader />
      ) : (
        <>
          <Header siteTitle={"Felipe Fernandes Diogo | Software Engineer"} />
          <Home />
          <About />
          {/* <Experience /> */}
        </>
      )}
    </Layout>
  );
};

// export const query = graphql`
//   home
// `;

export default IndexPage;
