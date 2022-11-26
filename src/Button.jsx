import React from "react";
// import styled from "styled-components";

import { Button as MaterialButton } from "@material-ui/core";

// Using Material UI
// const StyledButton = styled.button`
//   --btn-bg: var(--btn-color, #bada55);
//   color: #fff;
//   font-size: 1rem;
//   padding: 0.5rem;
//   margin: 0 1rem;
//   background: var(--btn-bg);
//   border: 2px solid #fff;
//   border-radius: 3px;
//   align-self: center;
//   cursor: pointer;
// `;

export default function Button({ func, children }) {
  // return <StyledButton onClick={func}>{children}</StyledButton>;
  return (
    <MaterialButton
      style={{
        padding: "0.5rem",
        color: "#fff",
        margin: "0 1rem",
        background: "var(--blue-dark, #bada55)",
        border: "2px solid #fff",
        borderRadius: "3px",
        alignSelf: "center",
        cursor: "pointer",
      }}
      size="large"
      variant="contained"
      onClick={func}
    >
      {children}
    </MaterialButton>
  );
}
