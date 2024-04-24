import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const [cart, setCart] = useState([]);
  const { _id, title, imageURL, bookdescription, author, language, pages, price } = useLoaderData();
  const data = [_id, title, imageURL, bookdescription, author, language, pages, price];
  const addToCart = (data) => {
    console.log('button was clicked', data)
  };
  return (
    <div className="mt-28 lg:px-24 container mx-auto px-4 py-8 flex justify-center items-center">
      <div className="w-1/2">
        <img src={imageURL} alt={title} className="w-full max-w-xs" />
      </div>
      <div className="w-1/2 px-2">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg font-bold mb-4">{author}</p>
        <p className="text-lg mb-4">{bookdescription}</p>
        <p className="text-lg">Price: ₹{price}</p>
        <p className="text-lg">Language: {language}</p>
        <p className="text-lg">Pages: {pages}</p>
        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => addToCart(data)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
