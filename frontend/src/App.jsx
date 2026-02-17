import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  function loadProducts() {
    fetch("http://localhost:3000/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch(() => setError("Could not load products"));
    console.log("Products loaded:", products);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function addProduct() {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: Number(price),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create product");
        return res.json();
      })
      .then((data) => {
        console.log("created:", data);
        loadProducts();      
        setName("");         
        setPrice("");
      })
      .catch(() => setError("Could not add product"));
  }
  function deleteProduct(id) {
  fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete");
      loadProducts();
    })
    .catch(() => setError("Could not delete product"));
}



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <input
      className="mt-4 w-full rounded border p-2"
      placeholder="Product name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      
      <input
      className="mt-4 w-full rounded border p-2"
      placeholder="Product price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      />
      <button className="mt-4 w-full rounded bg-blue-500 p-2 text-white" onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="rounded-lg bg-white p-4 shadow">
            <div className="font-semibold">{product.name}</div>
            <div className="text-sm text-gray-600">${product.price}</div>
            <button className="mt-2 rounded bg-red-500 p-1 text-white" onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
