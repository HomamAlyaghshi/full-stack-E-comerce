import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Could not load products");
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (name, price) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          price: Number(price),
        }),
      });
      if (!response.ok) throw new Error("Failed to create product");
      const data = await response.json();
      console.log("created:", data);
      await loadProducts();
      return { success: true };
    } catch (err) {
      setError("Could not add product");
      return { success: false, error: err.message };
    }
  };

  const updateProductPrice = async (productId, newPrice) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: newPrice,
        }),
      });
      if (!response.ok) throw new Error("Failed to update product");
      await loadProducts();
      return { success: true };
    } catch (err) {
      setError("Could not update product");
      return { success: false, error: err.message };
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: "DELETE"
      });
      if (!response.ok) throw new Error("Failed to delete");
      await loadProducts();
      return { success: true };
    } catch (err) {
      setError("Could not delete product");
      return { success: false, error: err.message };
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    loading,
    error,
    addProduct,
    updateProductPrice,
    deleteProduct,
    loadProducts
  };
};

export default useProducts;
