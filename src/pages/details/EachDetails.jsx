
import { useLoaderData } from 'react-router-dom';
import useTitle from '../useTitle';


const EachDetails = () => {

  useTitle('Details')
    const service = useLoaderData()
    const {name, subCategory, price, availableQuantity, sellerName, _id, pictureURL, detailsDescription, sellerPhone} =service
     console.log(service);
    return (
        <div className='mt-16'>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={pictureURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='pl-6'>
      <h1 className="text-5xl font-bold">{name}</h1>
      <h2 className='text-xl font-semibold pt-2'>Type : {subCategory}</h2>
      <p className="py-4"> <span className='text-xl font-semibold'>Description</span> : {detailsDescription}</p>
      <h2 className='text-xl font-semibold'>Price : { '$' + price}</h2>
      <h2 className='text-xl font-semibold'>Quantity : {availableQuantity}</h2>
      <h2 className='text-xl font-semibold'>Seller : {sellerName}</h2>
      <h2 className='text-xl font-semibold'>Seller Phone : {sellerPhone}</h2>
      <button className="btn btn-primary mt-6">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};


export default EachDetails;