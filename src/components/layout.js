/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import GlobalStyle from "#/styles/GlobalStyle";

import Header from "./header";

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div id="root">
      <Header siteTitle={"Felipe Fernandes Diogo | Software Engineer"} />

      <GlobalStyle />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
        <Footer>
          <a href="https://github.com/felipediogo/felipediogo.github.io">
            © {new Date().getFullYear()}, Built with Gatsby
          </a>
        </Footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
