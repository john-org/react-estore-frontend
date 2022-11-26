import React from "react";

import Product from "./Product";
import FormCreateProduct from "./FormCreateProduct";

import ProductsContext from "./ProductsContext";

function Products() {
  const { products, loggedin, addProduct } = React.useContext(ProductsContext);
  return (
    <section>
      {loggedin && <FormCreateProduct addProduct={addProduct} />}
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </section>
  );
}

export default Products;
