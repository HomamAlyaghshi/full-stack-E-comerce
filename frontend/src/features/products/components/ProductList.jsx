import React from 'react';

const ProductList = ({ products, onDeleteProduct, onUpdatePrice }) => {
  if (!products.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No products available
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {products.map((product) => (
        <li key={product.id} className="rounded-lg bg-white p-4 shadow-md">
          <div className="font-semibold text-lg">{product.name}</div>
          <div className="text-sm text-gray-600">${product.price}</div>
          <div className="mt-3 space-x-2">
            <button
              className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 transition-colors"
              onClick={() => onDeleteProduct(product.id)}
            >
              Delete
            </button>
            <button
              className="rounded bg-green-600 px-3 py-1 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
              onClick={() => onUpdatePrice(product.id, product.price + 100)}
            >
              +$100
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
