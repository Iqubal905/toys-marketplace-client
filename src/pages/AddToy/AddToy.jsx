import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const AddToy = () => {
   

const {user} = useContext(AuthContext)

  const [pictureURL, setPictureURL] = useState('');
  const [name, setName] = useState('');
   const [sellerName, setSellerName] = useState('');
  // const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [availableQuantity, setAvailableQuantity] = useState('');
  const [detailsDescription, setDetailsDescription] = useState('');


  const email = user?.email;
  const sellerDisplayName = user?.displayName

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // Send data to the database or perform other actions
    const formData = {
      pictureURL,
      name,
      sellerName,
      sellerDisplayName,
      email,
      sellerPhone,
      subCategory,
      price,
      rating,
      availableQuantity,
      detailsDescription,
    };

    console.log(formData);
    // Perform API call to send data to the server or handle it as needed

    fetch('https://curd-assignment-serer-side.vercel.app/addtoys', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })


  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto pt-24 grid md:grid-cols-2 md:gap-2">
      <div className="">
        <label htmlFor="pictureURL" className="block mb-">
          Picture URL
        </label>
        <input
          type="text"
          id="pictureURL"
          value={pictureURL}
          onChange={(e) => setPictureURL(e.target.value)}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full py-1 px-4  text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="">
        <label htmlFor="sellerName" className="block mb-1">
        Seller Name
        </label>




    
      {
      user?.displayName?  <input
          type="text"
          id="sellerName"
           defaultValue={user?.displayName}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        /> :  <input
        type="text"
        id="sellerName"
        value={sellerName}
        onChange={(e) => setSellerName(e.target.value)}
        className="w-full py-1 px-4  text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
      }
    








      </div>
      <div className="">
        <label htmlFor="sellerEmail" className="block mb-1">
          Seller Email
        </label>
        <input
          type="text"
          id="sellerEmail"
          defaultValue={user?.email}
         
        
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
         <div className="">
        <label htmlFor="sellerPhone" className="block mb-1">
          Seller Phone
        </label>
        <input
          type="text"
          id="sellerPhone"
          value={sellerPhone}
          onChange={(e) => setSellerPhone(e.target.value)}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="">
        <label htmlFor="subCategory" className="block mb-1">
        Sub Category
        </label>
        <input
          type="text"
          id="subCategory"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="">
        <label htmlFor="price" className="block mb-1">
        Price
        </label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="">
        <label htmlFor="rating" className="block mb-1">
         Rating
        </label>
        <input
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="">
        <label htmlFor="availableQuantity" className="block mb-1">
        Available Quantity
        </label>
        <input
          type="text"
          id="availableQuantity"
          value={availableQuantity}
          onChange={(e) => setAvailableQuantity(e.target.value)}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="">
        <label htmlFor="detailsDescription" className="block mb-1">
        Details Description
        </label>
        <input
          type="text"
          id="detailsDescription"
          value={detailsDescription}
          onChange={(e) => setDetailsDescription(e.target.value)}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      {/* Repeat the above pattern for other form fields */}
      {/* Name */}
      {/* Seller Name */}
      {/* Seller Email */}
      {/* Sub-category */}
      {/* Price */}
      {/* Rating */}
      {/* Available Quantity */}
      {/* Details Description */}
      
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};



export default AddToy;