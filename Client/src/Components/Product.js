// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch('https://shopmate-sbxu.onrender.com/products'); // Fetch all products
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products); // Assuming the API returns products in an array
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-lg text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            {products.length === 0 ? (
                <p className="text-center text-lg">No products available at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(product => (
                        <div 
                            key={product.id} 
                            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
                            style={{ aspectRatio: '1 / 2', height: '300px' }} // Fixed height for consistency
                        >
                            <img 
                                src={product.image_url} 
                                alt={product.name} 
                                className="object-cover w-full h-1/2 rounded-t-lg mb-4" // Adjusted height for image
                            />
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
                                    <p className="text-gray-700 mb-2">{product.description}</p>
                                    <p className="text-lg font-bold text-gray-900 mb-2">Price: ${product.price}</p>
                                    <p className="text-yellow-500 mb-4">Rating: {product.star} stars</p>
                                </div>
                                <Link to={`/products/${product.id}`}>
                                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                                        View Product
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
