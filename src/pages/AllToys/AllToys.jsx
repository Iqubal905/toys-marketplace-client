import React, { useEffect, useState } from 'react';
import ToysRow from './ToysRow';
import axios from 'axios';

const AllToys = () => {

    

const [toys, setToys] = useState([]);
const [searchToy, setSearchToy] = useState("");
useEffect(() => {
    fetch('https://curd-assignment-serer-side.vercel.app/toys')
    .then(res => res.json())
    .then(data => setToys(data))
}, [])

console.log(toys);




// const [searchResults, setSearchResults] = useState([]);

// const handleSearch = async (name) => {
//   try {
//     const response = await axios.get(`/search?name=${name}`);
//     setSearchResults(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };



const handleSearch = () => {
    fetch(`https://curd-assignment-serer-side.vercel.app/search?name=${searchToy}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };






    return (



 <div>



{/* 
<div className='mt-24'>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {searchResults.map((result) => (
          <li key={result._id}>{result.name}</li>
        ))}
      </ul>
    </div> */}










            <div className=' pt-20 overflow-x-auto w-full'>

<div className='grid justify-items-center'>
    
<h2 className=' font-bold text-3xl pt-8 pb-4'>All Toys</h2>

<div className="form-control ">
<div className="input-group text-right">
<input type="text"    onChange={(e) => setSearchToy(e.target.value)}   placeholder="Search… by toy name" className="input input-bordered" />
<button   onClick={handleSearch} className="btn btn-square">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
</button>
</div>
</div>

</div>



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