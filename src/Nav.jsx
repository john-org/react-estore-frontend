import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

import { Button as MaterialButton } from "@material-ui/core";

import ProductsContext from "./ProductsContext";

const NavStyles = styled.nav`
  --bg-color: var(--blue-dark);
  --btn-color: #007eb6;
  min-height: 3rem;
  background-color: var(--bg-color);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  a {
    color: #fff;
    padding: 1rem;
    font-size: 2rem;
    text-decoration: none;
  }
`;

const Nav = () => {
  const { loggedin, setLoggedin } = React.useContext(ProductsContext);
  return (
    <NavStyles>
      {/* <h1>
        <Link to="/">Products</Link>
      </h1> */}
      {/* <MaterialButton href="/">Products</MaterialButton> */}
      <MaterialButton
        style={{
          padding: "1rem",
          color: "#fff",
          margin: "0 1rem",
          borderRadius: "3px",
          alignSelf: "center",
          cursor: "pointer",
          textTransform: "none",
        }}
        href="/"
      >
        eStore
      </MaterialButton>

      <Button func={setLoggedin}>{loggedin ? "Log Out" : "Log In"}</Button>
    </NavStyles>
  );
};

export default Nav;
