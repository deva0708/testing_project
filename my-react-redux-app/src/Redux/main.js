import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, fetchProducts, removeItem } from './actions';
 
const Main = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
 
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
 
    return (
        <div className="container my-4">
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '100px', width: '100px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p>Category: {product.category}</p>
                                <p className="card-text">Price: ${product.price}</p>
                                <button onClick={() =>dispatch(addItem(product))} className="btn btn-primary m-2">+</button>
                                <button onClick={() =>dispatch(removeItem(product.id))} className="btn btn-danger" >-</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default Main;