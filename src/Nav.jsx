import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MaterialButton from "./MaterialButton";
import StorefrontIcon from "@mui/icons-material/Storefront";
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

let logInOut = {
  padding: "0.5rem",
  color: "#fff",
  margin: "0 1rem",
  background: "var(--blue-dark, #bada55)",
  border: "2px solid #fff",
  borderRadius: "3px",
  alignSelf: "center",
  cursor: "pointer",
};
let size = "large";
let variant = "text";

const Nav = () => {
  const { loggedin, setLoggedin } = React.useContext(ProductsContext);
  return (
    <NavStyles>
      <h1>
        <Link to="/">
          <StorefrontIcon fontSize="large" />
          eStore
        </Link>
      </h1>

      <MaterialButton
        style={logInOut}
        size={size}
        variant={variant}
        func={setLoggedin}
      >
        {loggedin ? "Log Out" : "Log In"}
      </MaterialButton>
    </NavStyles>
  );
};

export default Nav;
