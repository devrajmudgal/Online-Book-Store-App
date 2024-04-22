import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter((book) => book._id !== bookId);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((acc, book) => acc + book.price, 0);
    setTotalPrice(total);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <table className="w-full mb-8">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Author</th>
            <th className="py-2">Price</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((book) => (
            <tr key={book._id}>
              <td className="py-2">{book.title}</td>
              <td className="py-2">{book.author}</td>
              <td className="py-2">₹{book.price}</td>
              <td className="py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded" onClick={() => removeFromCart(book._id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <span className="text-lg font-bold">Total Price:</span>
        <span className="text-lg font-bold">₹{totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
