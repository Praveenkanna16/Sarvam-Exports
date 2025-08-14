// src/pages/AdminProductsPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts, removeProduct, setProductsLoading } from '../store/productSlice';
import api from '../services/api';
import './AdminProductsPage.css';

const AdminProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setProductsLoading(true));
      try {
        const response = await api.get('/products/admin'); // Use the admin route
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        dispatch(setProductsLoading(false));
      }
    };
    fetchProducts();
  }, [dispatch]);
  
  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/products/${productId}`);
        dispatch(removeProduct(productId)); // Remove from state instantly
      } catch (error) {
        console.error('Failed to delete product:', error);
        alert('Failed to delete product.');
      }
    }
  };

  return (
    <div className="admin-products-page">
      <div className="page-header">
        <h1>Manage Products</h1>
        <Link to="/admin/products/new" className="btn-add-new">Add New Product</Link>
      </div>
      {loading ? <p>Loading products...</p> : (
        <div className="products-table-container">
          <table className="products-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td><img src={product.images[0]} alt={product.name} className="product-thumbnail" /></td>
                  <td>{product.name}</td>
                  <td>{product.category.name}</td>
                  <td>
                    <Link to={`/admin/products/edit/${product._id}`} className="btn-edit">Edit</Link>
                    <button className="btn-delete" onClick={() => handleDelete(product._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminProductsPage;