import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const ManageBooks = () => {
  const [allbooks, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setbooks(data));
  }, [])

  // delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully!")
      // setbooks(data);
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your <span className='text-blue-700'>Books</span></h2>

      {/* table  */}
      <table className="table table-striped lg:w-[1180px]">
        <thead>
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col"><span>Action</span></th>
          </tr>
        </thead>
        {
          allbooks.map((book, index) => <tbody className='divide-y' key={book._id}>
            <tr className='bg-white dark:border-gray-700 dark:bg-gray-800 my-8'>
              <th scope="row">{index + 1}</th>
              <td className='whitespace-nowrap items-center'>{book.title}</td>
              <td className='whitespace-nowrap'>{book.author}</td>
              <td><Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to={`/admin/dashboard/edit-books/${book._id}`}>Edit</Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button></td>
            </tr>
          </tbody>)
        }

      </table>
    </div>
  )
}

export default ManageBooks
