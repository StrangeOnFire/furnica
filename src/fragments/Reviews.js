import React from 'react'
import ReviewCards from './ReviewCards'



export default function Reviews() {

const reviewsArray = [
    {
        via:'Facebook',
        des:`Very happy with my bedroom furniture.Looks very amazing and no hard work assembling it From ordering to delivery the process was efficient. The driver  was on the spot on time. `,
        authorName:'Sourav Anand',
        activeClass:'active'
    },
    {
        via:'Twitter',
        des:`This company delivers quality furniture. I ordered the oak bench seat which has a beautiful strong leather cream padded seat. Legs fitted easily into place. I love it very much.`,
        authorName:'Harsh Prateek'
    },
    {
        via:'Facebook',
        des:`Excellent service and delivery times, great communication and a great well made table, exactly as described.would definitely buy from them again.Very good company to deal with.`,
        authorName:'Piyush Puchhi'
    },
]

    return (
        <>
            <div className='reviews-section'>
                <div className='reviews-section-heading'>
                    <h1>What Our Customer Says❓ </h1>
                </div>
              
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {
                            reviewsArray.map((element)=>(
                                <ReviewCards key={element.authorName} ActiveClass={element.activeClass}  via={element.via} description={element.des} name={element.authorName}/>
                            ))
                        }
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="false"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
