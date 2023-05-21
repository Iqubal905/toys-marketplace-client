import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../../assets/gallery/g-1.jpg'
import img2 from '../../../assets/gallery/g-2.jpg'
import img3 from '../../../assets/gallery/g-3.jpg'
import img4 from '../../../assets/gallery/g-4.jpg'
import img5 from '../../../assets/gallery/g-5.jpg'
import img6 from '../../../assets/gallery/g-6.jpg'
import img7 from '../../../assets/gallery/g-7.jpg'
import img8 from '../../../assets/gallery/g-8.jpg'
import img9 from '../../../assets/gallery/g-9.jpg'
import img10 from '../../../assets/gallery/g-10.jpg'
import img11 from '../../../assets/gallery/g-11.jpg'
import img12 from '../../../assets/gallery/g-12.jpg'
import img13 from '../../../assets/gallery/g-13.jpg'
import img14 from '../../../assets/gallery/g-14.jpg'
import img15 from '../../../assets/gallery/g-15.jpg'
import img16 from '../../../assets/gallery/g-16.jpg'
import img17 from '../../../assets/gallery/g-17.jpg'

const Gallery = () => {
    return (
        <div>
<div className=" bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Toy Car Gallery</h1>
      <p className="py-6 "> Welcome to our Toy Car Gallery, a delightful space that transports you into a miniature world of automotive wonders. Immerse yourself in a collection of
       meticulously crafted toy cars, each capturing the essence of iconic vehicles from different eras and styles.</p>
    </div>
  </div>
</div>




<div className="grid grid-cols-4 gap-4">
<div data-aos="flip-up"><img src={img4} alt="" /></div>
  
<div data-aos="zoom-in-left">rrrrrrrrrrrrrrrr</div>
  <div data-aos=""
    >
       <img src={img5} alt="" />
</div>
</div>






        </div>
    );
};

export default Gallery;