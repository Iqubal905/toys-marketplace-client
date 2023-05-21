import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../useTitle';

const Update = () => {
  useTitle('Update Toys')
    const data = useLoaderData()
    const {name,  price, availableQuantity,  _id, pictureURL, detailsDescription} =data
    

  
    const handleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const price = form.price.value
      const  availableQuantity = form.quantity.value
      const  detailsDescription = form.description.value
      console.log(price);


      const update = {price, availableQuantity, detailsDescription}
    
      fetch(`https://curd-assignment-serer-side.vercel.app/toys/${_id}`, {
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

       
      })
  
  
    };

    return (
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={pictureURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <form onSubmit={handleUpdate} className="max-w-5xl mx-auto pt-24  md:gap-2">

        <h1 className="text-5xl font-bold pb-6">{name}</h1>
      <div className="form-control">
  <label className="input-group">
    <span className='pr-10'>Price </span>
    <input type="number" name="price" defaultValue={price} className="input input-bordered" />
    <span>USD</span>
  </label>
</div>
<div className="form-control">
  <label className="input-group">
    <span>Quantity</span>
    <input type="number" name="quantity" defaultValue={availableQuantity}  className="input input-bordered" />
  </label>
</div>

 <label className="label">
    <span className="label-text text-2xl font-semibold">Description:</span>
  </label>
<textarea placeholder="Bio"  name='description'  defaultValue={detailsDescription} className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            
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
  </div>
</div>


      
    );
};

export default Update;