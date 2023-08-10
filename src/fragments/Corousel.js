import React from 'react'
import slideOne from '../images/Slideshow1.jpg'
import slideTwo from '../images/Slideshow2.jpg'
import slideThree from '../images/Slideshow3.jpg'
export default function Corousel() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner carsl-img">
                    <div className="carousel-item active">
                        <img src={slideOne} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slideTwo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slideThree} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
