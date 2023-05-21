import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';
import useTitle from '../useTitle';


const MyToys = () => {
  
    useTitle('My Toys')
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);


    const handleDelete = id => {
        const confirmation = confirm('Are you sure you want to delete');
       if(confirmation){
             fetch(`https://curd-assignment-serer-side.vercel.app/toys/${id}`, {
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title:'Success',
                        text: 'Your toy has been deleted',
                        icon :'success',
                        confirmButtonText:'Cool'
                    })
                    const remaining = mytoys.filter(mytoy => mytoy._id  !== id)
                    setMytoys(remaining)
                }
             })
       }
    
       }










     console.log(user);
    const url = `https://curd-assignment-serer-side.vercel.app/mycar?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
         .then(res => res.json())
        .then(data => setMytoys(data))
               
                   
               
           
    }, []);

    return (
        <div>
            <div className=' mt-20 overflow-x-auto w-full'>
            <h2 className=' font-bold text-3xl pt-8 pb-4 text-center'>My Toys's Details</h2>
     <table className='table w-full'>
        <thead>
            <tr className='text-center'>
                <th>Toy Picture</th>
                <th>Toy name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                 <th><button>Details</button></th>
            </tr>
        </thead>
        <tbody>
            {
               mytoys.map(mytoy => <MyToyRow
               key={mytoy._id}
               mytoy={mytoy}
               handleDelete={handleDelete}
               ></MyToyRow> )
               
            }
        </tbody>
     </table>
            </div>
        </div>

    );
};

export default MyToys;