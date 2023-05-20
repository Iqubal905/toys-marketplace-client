import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryCard = ({toy}) => {
   
    const {name, rating, price, pictureURL, _id} =toy

    return (
        <div  className="">

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={pictureURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
<div className='text-left font-semibold'>
  <p>Price: { price}</p>
    <p>Rating: {rating}</p>
</div>
    <div className="card-actions justify-end">
    <Link to={`/alltoys/${_id}`}><button className="btn btn-active btn-ghost">View details</button></Link>
        
    </div>
  </div>
</div>

        </div>
    );
};

export default CatagoryCard;