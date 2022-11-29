import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledSummary = styled.summary`
  .container {
    display: grid;
    grid-template-columns: 30% 60%;
    column-gap: 3rem;
    grid-template-areas:
      "sidebar content-1"
      "sidebar content-2"
      "sidebar content-3";
  }

  .sidebar {
    grid-area: sidebar;
    justify-self: end;
    align-self: center;
  }

  .content-1 {
    grid-area: content-1;
    justify-self: start;
    align-self: end;
  }

  .content-2 {
    grid-area: content-2;
    justify-self: start;
    align-self: center;
  }

  .content-3 {
    grid-area: content-3;
    justify-self: start;
    align-self: start;
  }
`;

function Product({ product }) {
  const { title, price, description, image, _id } = product;

  return (
    <StyledSummary>
      <div className="container">
        <div className="sidebar">
          <img src={`img/${image}`} alt={title} />
        </div>
        <div className="content-1">
          <h3>
            <Link to={_id}>{title}</Link>
          </h3>
        </div>
        <div className="content-2">
          <p>{description}</p>{" "}
        </div>
        <div className="content-3">
          <p>Price: ${price}</p>
        </div>
      </div>
    </StyledSummary>
  );
}

export default Product;
