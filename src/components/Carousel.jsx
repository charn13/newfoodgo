import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
      <div className="carousel-inner">
      <div className="carousel-caption" style={{zIndex:"10"}}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-succes" type="submit">Search</button>
            </form>
          </div>
        <div className="carousel-item active">
          <img src="https://tse2.mm.bing.net/th?id=OIP.wBu0Xsb774mtzvjhq1C3DgHaE8&pid=Api&P=0&h=180" className="d-block w-100 cimg " alt='' style={{ filter: "brightness(30%)" }} />
          
        </div>
        <div className="carousel-item">
          <img src="https://tse4.mm.bing.net/th?id=OIP.auCZfYAyBvocH6w9D14YqgHaF6&pid=Api&P=0&h=180" className="d-block w-100  cimg" alt="" style={{ filter: "brightness(30%)" }} />
        </div>
        <div className="carousel-item">
          <img src="https://tse2.mm.bing.net/th?id=OIP.paK_UK5Hnf_fGUCkmZ-hFAHaEK&pid=Api&P=0&h=180" className="d-block w-100  cimg" alt="" style={{ filter: "brightness(30%)" }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
