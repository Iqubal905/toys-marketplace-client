import React from 'react';
import img from '../../../assets/gallery/seller2.jpg'
const About = () => {
    return (
        <div>
             
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Kamrul Ullah</h1>
      <p className="py-6">I want to provide best service with faithfullay. <br /> 
      I collect latested toys and sell with low cost.
      </p>
      <button className="btn btn-primary">Conversation with me</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;