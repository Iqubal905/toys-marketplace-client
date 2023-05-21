import React, { useEffect } from 'react';

const useTitle = title => {
   useEffect(() =>{
    document.title = `${title} - Car Toys`;
   },[title])
};

export default useTitle;