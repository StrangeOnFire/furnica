import React from 'react'

export default function ReviewCards({ via, description, name,ActiveClass }) {
    return (
        <div className={`carousel-item ${ActiveClass}`}>
            <div className="carousel-caption  d-block">
                <h6>via {via}</h6>
                <p>“{description}”</p>
                <h5>-{name}</h5>
            </div>
        </div>
    )
}
