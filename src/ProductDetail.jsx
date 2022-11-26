import React from "react";
import FormEditProduct from "./FormEditProduct";
import { Link, useParams } from "react-router-dom";

import ProductsContext from "./ProductsContext";

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

  return (
    <div>
      {loggedin && (
        <>
          <FormEditProduct
            thisProduct={thisProduct}
            editProduct={editProduct}
          />
          <button onClick={() => delProduct()}>delete</button>
        </>
      )}

      <img src={`/img/${thisProduct.image}`} alt={thisProduct.title} />
      <h1>{thisProduct.title}</h1>
      <p>{thisProduct.description}</p>

      {/* {loggedin && <button onClick={() => delRecipe()}>delete</button>} */}

      <Link to="/">Home</Link>
    </div>
  );
}

export default ProductDetail;
