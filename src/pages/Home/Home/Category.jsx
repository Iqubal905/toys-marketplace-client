import React, { useState } from 'react';
import { useEffect } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CatagoryCard from './CatagoryCard';

const Category = () => {

const [toys, setToys] = useState([])
const [activeTab, setActiveTab] = useState('mini-police-car')



useEffect(() => {
   fetch(`http://localhost:3000/category/${activeTab}`)
      .then((res) => res.json())
       .then((result) => {
        setToys(result)
       
       })

}, [activeTab])



const handleTabClick = (tabName) =>{
    setActiveTab(tabName)
    console.log(activeTab);
}





    return (
        <div>
           <div className="  bg-base-200">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold py-6">Shop By Category</h1>
    
      <Tabs className='py-4'>
    <TabList className='flex  justify-center pb-4 '>
     <Tab  className='btn btn-primary'  onClick={() => handleTabClick('mini-police-car')}>Mini Police Car</Tab>
      <Tab  className='btn btn-primary mx-2' onClick={() => handleTabClick('sports-car')}>Sports Car</Tab>
      <Tab   className='btn btn-primary'  onClick={() => handleTabClick('mini-fire-truck')}>Mini Fire Truck</Tab>
    </TabList>

    <TabPanel className="grid md:grid-cols-3  gap-4">
        {
            toys.map(toy => <CatagoryCard
            key={toy._id}
            toy={toy}
            ></CatagoryCard>)
        }
    </TabPanel>
    <TabPanel className="grid md:grid-cols-3  gap-4">    {
            toys.map(toy => <CatagoryCard
            key={toy._id}
            toy={toy}
            ></CatagoryCard>)
        }
    </TabPanel>
    <TabPanel className="grid md:grid-cols-3  gap-4">    {
            toys.map(toy => <CatagoryCard
            key={toy._id}
            toy={toy}
            ></CatagoryCard>)
        }
    </TabPanel>
  </Tabs>
     
    </div>
  </div>
</div>





















        </div>
    );
};

export default Category;