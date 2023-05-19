import React from 'react';

const MyToyRow = ({mytoy, handleDelete}) => {


  


    const {name, subCategory, price, availableQuantity, sellerName, _id, pictureURL, detailsDescription, sellerPhone} =mytoy
    return (
        <tr className='text-center'>
        <td>
       
            <div className="avatar">
              <div className="mask mask-squircle w-40 h-40">
                <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
              </div>
           
          </div>
        </td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td> { '$' + price}</td>
        <td>{availableQuantity}</td>
        <td>
        <button  className="btn btn-outline btn-info">Update</button>
        <button   onClick={() => handleDelete(_id)}  className="btn btn-outline btn-warning">Delate</button>
            </td>
       </tr>
    );
};

export default MyToyRow;