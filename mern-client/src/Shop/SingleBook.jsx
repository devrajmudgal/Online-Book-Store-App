import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { title, imageURL, bookdescription, author, language, pages, price } = useLoaderData();
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setbooks(data));
  }, [])

  const addToCart = () => {
    alert("Book Purchased Successfully");
    // console.log(id);
    // fetch(`http://localhost:5000/book/${id}`).then(res => res.json()).then(data => {
    //   alert("Book is deleted successfully!")
    //   // setbooks(data);
    // })
  }
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
          <button onClick={() => addToCart()} className='font-medium text-white bg-blue-700 dark:text-cyan-500 mr-5 my-4 px-4 py-1 rounded-sm hover:bg-sky-600'>Buy</button>

        </div>
      </div>
    </div>
  );
};

export default SingleBook;
