import React from 'react'
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { title, author, imageURL, bookdescription, language, pages, price } = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.bookTitle.value;
    const author = form.authorName.value;
    const bookdescription = form.bookDescription.value;
    const language = form.language.value;
    const pages = form.pages.value;
    const price = form.price.value;
    const imageURL = form.imageURL.value;
    // const bookPDFURL = form.bookPDFURL.value;


    const updatebookObj = {
      title, author, imageURL, bookdescription, language, pages, price
    }

    // console.log(bookObj)
    // update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatebookObj)
    }).then(res => res.json()).then(data => {
      alert("Book is updated successfully!")
      // setbooks(data);
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update A <span className='text-blue-700'>Book</span></h2>


      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*first row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required defaultValue={title} />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="auhtorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={author} />
          </div>
        </div>


        {/*second row*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required defaultValue={imageURL} />

          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="language" value="Language" />
            </div>
            <TextInput id="language" name='language' type="text" placeholder="Language" required defaultValue={language} />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="pages" value="Pages" />
            </div>
            <TextInput id="pages" name='pages' type="number" placeholder="Enter no. of pages" required defaultValue={pages} />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" name='price' type="number" placeholder="Price of the Book" required defaultValue={price} />
          </div>
        </div>

        {/*Book Description */}
        <div>
          <div className='lg:w-10/12'>
            <div className="mb-2 mt-4 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required className='w-full' rows={4} defaultValue={bookdescription} />

          </div>

        </div>

        <Button type="submit" className='mt-5 bg-blue-700'>Update Book</Button>


      </form >
    </div >
  )
}

export default EditBooks
