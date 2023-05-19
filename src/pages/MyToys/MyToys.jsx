import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow';


const MyToys = () => {
  

    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);


    const handleDelete = id => {
        const confirmation = confirm('Are you sure you want to delete');
    console.log('okkkk');
       if(confirmation){
             fetch(`http://localhost:3000/toys/${id}`, {
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert ('Deleted Successful')
                    const remaining = mytoys.filter(mytoy => mytoy._id  !== id)
                    setMytoys(remaining)
                }
             })
       }
    
       }










     console.log(user);
    const url = `http://localhost:3000/mycar?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
         .then(res => res.json())
        .then(data => setMytoys(data))
               
                   
               
           
    }, []);

    return (
        <div>
            <div className=' mt-16 overflow-x-auto w-full'>
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