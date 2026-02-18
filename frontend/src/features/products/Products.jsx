import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import useProducts from './hooks/useProducts';

const Products = () => {
  const { 
    products, 
    loading, 
    error, 
    addProduct, 
    deleteProduct, 
    updateProductPrice 
  } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  return (
    <div className=" py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">Product Management</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <ProductForm onAddProduct={addProduct} />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Products List</h2>
          <ProductList 
            products={products}
            onDeleteProduct={deleteProduct}
            onUpdatePrice={updateProductPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
