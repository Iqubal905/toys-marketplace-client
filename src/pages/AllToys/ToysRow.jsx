import React from 'react';

const ToysRow = ({toy}) => {

    const {name, subCategory, price, availableQuantity, sellerName} =toy
    console.log(toy);
    return (
       <tr className='text-center'>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td> { '$' + price}</td>
        <td>{availableQuantity}</td>
        <td><button>details</button></td>
       </tr>
    );
};

export default ToysRow;