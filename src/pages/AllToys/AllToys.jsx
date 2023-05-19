import React, { useEffect, useState } from 'react';
import ToysRow from './ToysRow';

const AllToys = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-dortot-server-my.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])


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


    //     <div>
    //     <h2 className="mt-16 text-5xl">Your bookings: {toys.length}</h2>
    //     <div className="overflow-x-auto w-full">
    //         <table className="table w-full">
    //             {/* head */}
    //             <thead>
    //                 <tr>
    //                     <th>
    //                         <label>
    //                             <input type="checkbox" className="checkbox" />
    //                         </label>
    //                     </th>
    //                     <th>Image</th>
    //                     <th>Service</th>
    //                     <th>Date</th>
    //                     <th>Price</th>
    //                     <th>Status</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
                    
    //                 {/* {
    //                     bookings.map(booking => <BookingRow
    //                         key={booking._id}
    //                         booking={booking}
    //                         handleDelete={handleDelete}
    //                         handleBookingConfirm={handleBookingConfirm}
    //                     ></BookingRow>)
    //                 } */}
    //             </tbody>

    //         </table>
    //     </div>
    // </div>
    );
};

export default AllToys;