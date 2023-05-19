import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({toy}) => {

    const {name, subCategory, price, availableQuantity, sellerName, _id} =toy
    console.log(toy);
    return (
       <tr className='text-center'>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td> { '$' + price}</td>
        <td>{availableQuantity}</td>
        <td>
           
        {/* <li><Link to={`/alltoys/${_id}`}>My Toys</Link></li> */}

        <Link to={`/alltoys/${_id}`}><button className="btn btn-active btn-ghost">View details</button></Link>
            </td>
       </tr>
    );
};

export default ToysRow;