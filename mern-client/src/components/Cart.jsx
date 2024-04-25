import React, { useState } from 'react';
import SingleBook from '../Shop/SingleBook';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems([...cartItems, book]);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
            <SingleBook addToCart={addToCart} />
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Author</th>
                        <th className="px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.title}</td>
                            <td className="border px-4 py-2">{item.author}</td>
                            <td className="border px-4 py-2">₹{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;