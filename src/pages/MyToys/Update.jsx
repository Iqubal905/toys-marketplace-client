import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Update = () => {

    const data = useLoaderData()
    const {name, subCategory, price, availableQuantity, sellerName, _id, pictureURL, detailsDescription, sellerPhone} =data
    



    

    // const [pictureURL, setPictureURL] = useState('');
    // const [name, setName] = useState('');
    //  const [sellerName, setSellerName] = useState('');
    // // const [sellerEmail, setSellerEmail] = useState('');
    // const [sellerPhone, setSellerPhone] = useState('');
    // const [subCategory, setSubCategory] = useState('');
    // const [price, setPrice] = useState('');
    // const [rating, setRating] = useState('');
    // const [availableQuantity, setAvailableQuantity] = useState('');
    // const [detailsDescription, setDetailsDescription] = useState('');
  
  
   
  
    const handleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const price = form.price.value
      console.log(price);
      const update = {price}
      // Send data to the database or perform other actions
      
      // Perform API call to send data to the server or handle it as needed
  
      fetch(`http://localhost:3000/toys/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(update)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);

if(data.modifiedCount>0){
alert ('Updated confirm')
}

        //   if(data.insertedId){
        //     Swal.fire({
        //         title:'Success',
        //         text: 'Updated',
        //         icon :'success',
        //         confirmButtonText:'Cool'
        //     })
        //   }
      })
  
  
    };




    return (
        <div className='mt-24'>
           <form onSubmit={handleUpdate} className="max-w-5xl mx-auto pt-24 grid md:grid-cols-2 md:gap-2">
            
               <input type="text" name="price" defaultValue={price} />
      {/* <div className="">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          defaultValue={user?.email}
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
        defaultValue={user?.email}
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
          defaultValue={user?.email}
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
          defaultValue={user?.email}
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
          defaultValue={user?.email}
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
          defaultValue={user?.email}
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
          defaultValue={user?.email}
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
          defaultValue={user?.email}
          className="w-full py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div> */}
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
          Update
        </button>
      </div>
    </form>
        </div>
    );
};

export default Update;