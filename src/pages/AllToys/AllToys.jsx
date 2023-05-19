import React, { useEffect, useState } from 'react';
import ToysRow from './ToysRow';

const AllToys = () => {

    

const [toys, setToys] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(data => setToys(data))
}, [])

console.log(toys);




    return (

       
        <div>
            <div className=' mt-16 overflow-x-auto w-full'>
     <table className='table w-full'>
        <thead>
            <tr className='text-center'>
                <th>Seller name</th>
                <th>Toy name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                 <th><button>Details</button></th>
            </tr>
        </thead>
        <tbody>
            {
                toys.map(toy => <ToysRow
                key={toy._id}
                toy={toy}
                ></ToysRow>)
            }
        </tbody>
     </table>
            </div>
        </div>


   
    );
};

export default AllToys;