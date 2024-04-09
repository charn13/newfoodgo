

import React, { useEffect, useState } from 'react';
import { Header,Footer ,Card,Carousel } from '../components';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadFoodItems = async () => {
    let response = await fetch("https://newfoodgo.onrender.com/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItems(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <Header />
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
          {/* Carousel items */}
          <Carousel/>
        </div>
        {/* Carousel controls */}
      </div>
      <div className='container'> 
        <div className="">
        {/* Search box */}
        {foodItems.map((data) => (
          <div className='row mb-3' key={data.id}>
            {/* Category name */}
            <div className='fs-3 m-3'>{data.CategoryName}</div>
            <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
            {/* Food items */}
            {foodItems.filter((items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
              .map(filterItems => (
                <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                  <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
                </div>
              ))}
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
