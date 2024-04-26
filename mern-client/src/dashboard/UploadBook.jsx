import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {

  const handleBookSubmit=(event)=>{
    event.preventDefault();
    const form= event.target;

    const bookTitle=form.bookTitle.value;
    const authorName= form.authorName.value;
    const imageURL= form.imageURL.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, bookDescription, bookPDFURL 
    }

    console.log(bookObj)

    //send data to db

    fetch("http://localhost:5000/upload-book",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringyfy(bookObj)
    }).then(res=>res.json()).then(data =>{
     
      console.log(data)
      alert("Book uploaded successfully!!!")
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      
      
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*first row*/}
        <div className='flex gap-8'>
            <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="auhtorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>
        </div>
     

        {/*second row*/}
        <div className=' gap-8'>
            <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
          </div>
        

        {/*Book Description */}
        <div>
        <div className='lg:w-10/12'>
        <div className="mb-2 mt-4 block">
              <Label htmlFor="bookDescription" value="Book Description" />
              </div>
              <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required className='w-full'  rows={6} />
              
        </div>

        </div>
        </div>

        {/*book pdf link */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="bookPDFURL" placeholder="Book PDF URL" required />
      </div>

      <Button type="submit" className='mt-5 bg-blue-700'>Upload Book</Button>

        

     
    </form>
    </div>
  )
}

export default UploadBook
