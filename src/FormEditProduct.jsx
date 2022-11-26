import React from "react";
import Button from "./Button";

const FormEditProduct = ({ editProduct, thisProduct }) => {
  const [values, setValues] = React.useState({
    title: thisProduct.title,
    image: thisProduct.image,
    description: thisProduct.description,
    price: thisProduct.price,
  });

  const updateProduct = (event) => {
    event.preventDefault();
    const product = {
      ...thisProduct,
      title: values.title,
      image: values.image,
      description: values.description,
      price: values.price,
    };
    editProduct(product);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={updateProduct}>
        <input
          type="text"
          placeholder="Product title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Product image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Product description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="Product price"
          value={values.price}
          name="price"
          onChange={handleInputChange}
        />

        <Button type="submit">Edit Product</Button>
      </form>
    </div>
  );
};

export default FormEditProduct;
