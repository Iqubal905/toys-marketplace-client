import React from 'react';
    import img from '../../assets/err.jpg'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='grid justify-center'>
           <img src={img} alt="" />
         
           <Link  to='/'  className='pl-32 pt-6'> <button className="btn btn-outline btn-accent">Go to Home</button>
          </Link>

        </div>
    );
};

export default Error;
