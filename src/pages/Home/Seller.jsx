import React from 'react';
import img1 from '../../assets/gallery/seller1.jpg'
import img4 from '../../assets/gallery/seller4.jpg'
import img3 from '../../assets/gallery/seller3.jpg'
const Seller = () => {
    return (
        <div>
            <div className="  bg-base-200">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold py-6">Best Car Buyer</h1>
     
             </div>
           </div>

<div className='grid md:grid-cols-3  gap-4'>

<div className="card w-96 glass">
  <figure><img src={img1}alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Jumon Monjon Kan</h2>
    <p><span className='font-bold'>Organization: </span>Toys World Market</p>
    <p><span className='font-bold'>Phone: </span>+385658488939</p>
    <p><span className='font-bold'>Country: </span>Italy</p>
   
  </div>
</div>

<div className="card w-96 glass">
  <figure><img src={img4}alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Mickel Mondol</h2>
    <p><span className='font-bold'>Organization: </span>Car Junction</p>
    <p><span className='font-bold'>Phone: </span>+08565844539</p>
    <p><span className='font-bold'>Country: </span>Kanada</p>
   
  </div>
</div>
<div className="card w-96 glass">
  <figure><img src={img3}alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Layla Princ</h2>
    <p><span className='font-bold'>Organization: </span>Toys World Way</p>
    <p><span className='font-bold'>Phone: </span>+00r558488939</p>
    <p><span className='font-bold'>Country: </span>Suiden</p>
   
  </div>
</div>

</div>


           
        </div>
        </div>
    );
};

export default Seller;