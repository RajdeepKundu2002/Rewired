import React from 'react'
export default function Pic(props) {
    return (
        <div className="carousel-item">
            <img src={props.url} className="d-block w-100" alt="..." />
        </div>
    )
}