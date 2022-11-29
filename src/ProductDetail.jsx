import React from "react";
import FormEditProduct from "./FormEditProduct";
import { Link, useParams } from "react-router-dom";

import MaterialButton from "./MaterialButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import ProductsContext from "./ProductsContext";

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

function ProductDetail() {
  const { products, loggedin, deleteProduct, editProduct } =
    React.useContext(ProductsContext);
  const { productId } = useParams();
  const [productDeleted, setProductDeleted] = React.useState(false);

  const currProduct = products.filter((product) => product._id === productId);
  const thisProduct = { ...currProduct[0] };

  const delProduct = () => {
    deleteProduct(thisProduct._id);
    setProductDeleted(true);
  };

  if (productDeleted) {
    return (
      <>
        <p>Product deleted!</p>
        <Link to="/">Home</Link>
      </>
    );
  }

  let style = {
    background: "red",
  };

  let size = "small";
  let variant = "contained";

  return (
    <div>
      {loggedin && (
        <>
          <FormEditProduct
            thisProduct={thisProduct}
            editProduct={editProduct}
          />
          {/* <button onClick={() => delProduct()}>deletee</button> */}
        </>
      )}

      {/* TODO: Reuse React component, but fix id appended to URL(again) */}
      {/* <Product product={thisProduct} /> */}
      {/* <img src={`/img/${thisProduct.image}`} alt={thisProduct.title} />
      <h1>{thisProduct.title}</h1>
      <p>{thisProduct.description}</p> */}

      <StyledSummary>
        <div className="container">
          <div className="sidebar">
            <img src={`img/${thisProduct.image}`} alt={thisProduct.title} />
          </div>
          <div className="content-1">
            <h3>{thisProduct.title}</h3>
          </div>
          <div className="content-2">
            <p>{thisProduct.description}</p>{" "}
          </div>
          <div className="content-3">
            <p>Price: {thisProduct.price}</p>
          </div>
        </div>
      </StyledSummary>

      {/* {loggedin && <button onClick={() => delRecipe()}>delete</button>} */}
      {loggedin && (
        <MaterialButton
          style={style}
          size={size}
          variant={variant}
          func={delProduct}
        >
          <DeleteForeverIcon />
          Delete Product
        </MaterialButton>
      )}
      <p>
        <Link to="/">
          {/* <StorefrontIcon fontSize="large" /> */}
          Home
        </Link>
      </p>
    </div>
  );
}

export default ProductDetail;
