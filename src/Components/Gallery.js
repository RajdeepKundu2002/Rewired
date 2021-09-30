import React from 'react';
import Pic from './Pic.js'
export default function Gallery() {
    return (
        <>
            <h1 style={{textAlign:"center"}}>GALLERY</h1>
            <div className="d-flex justify-content-center my-auto" style={{ height: 500 }} >
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade my-auto" data-bs-ride="carousel" style={{ width: 380 }}>
                    <div className="carousel-inner" data-interval="false">
                        <div className="carousel-item active">
                            <img src='image/0.png' className="d-block w-100" alt="..." />
                        </div>
                        <Pic url="image/1.png" />
                        <Pic url="image/2.png" />
                        <Pic url="image/3.png" />
                        <Pic url="image/4.png" />
                        <Pic url="image/5.png" />
                        <Pic url="image/6.png" />
                        <Pic url="image/7.png" />
                        <Pic url="image/8.png" />
                        <Pic url="image/9.png" />
                        <Pic url="image/10.png" />
                        <Pic url="image/11.png" />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}