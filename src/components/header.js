// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Menu from "./menu";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}>
    <Menu />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
