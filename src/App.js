import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

import { useFetch } from "./hooks/useFetch";
import useToggle from "./hooks/useToggle";

import ProductsContext from "./ProductsContext";

function App() {
  const [products, setProducts] = React.useState([]);
  const [loggedin, setLoggedin] = useToggle(false);
  const [loading, setLoading] = useToggle(true);
  const [error, setError] = React.useState("");
  const { get, post, del, put } = useFetch(`/api/products`);

  const addProduct = (product) => {
    post("/api/products", product).then((data) => {
      setProducts([data, ...products]);
    });
  };

  const deleteProduct = (productId) => {
    console.log("productId:", productId);
    del(`/api/products/${productId}`).then(
      setProducts((products) =>
        products.filter((product) => product._id !== productId)
      )
    );
  };

  const editProduct = (updatedProduct) => {
    console.log(updatedProduct);
    put(`/api/products/${updatedProduct._id}`, updatedProduct).then(
      get("/api/products").then((data) => {
        setProducts(data);
      })
    );
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    setLoading(true);
    get("/api/products")
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const value = {
    products,
    loggedin,
    setLoggedin,
    addProduct,
    deleteProduct,
    editProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      <main>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ProductsContext.Provider>
  );
}

export default App;
