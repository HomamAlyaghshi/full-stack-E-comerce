import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      onAddProduct(name, price);
      setName("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full rounded border p-2"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full rounded border p-2"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 transition-colors"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
