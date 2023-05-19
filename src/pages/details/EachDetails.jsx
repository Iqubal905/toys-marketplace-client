
import { useLoaderData } from 'react-router-dom';


const EachDetails = () => {
    const service = useLoaderData()
    const {name, subCategory, price, availableQuantity, sellerName, _id} =service
     
    return (
        <div className='mt-24'>
            <h2>{_id}</h2>
            <h1>{price}</h1>
        </div>
    );
};


export default EachDetails;