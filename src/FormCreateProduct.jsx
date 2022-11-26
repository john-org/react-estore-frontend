import React from "react";
import Button from "./Button";

const FormCreateProduct = ({ addProduct }) => {
  const [values, setValues] = React.useState({
    title: "Product Title",
    image: "product.png",
    description: "Description of the product",
    price: "1000",
  });

  const createProduct = (event) => {
    event.preventDefault();
    const product = {
      title: values.title,
      image: values.image,
      description: values.description,
      price: values.price,
    };
    addProduct(product);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    // computed property names
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Add Product Form</h3>
      <form onSubmit={createProduct}>
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

        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default FormCreateProduct;
