import React from 'react';
import './Home.css';
export default function Home() {
    return (
        <div className="container d-flex h-100 text-center w-100 h-100 p-5 mx-auto flex-column">
            <div className="px-3 hero">
                <h1 className="hero-heading">Rewired 2.0</h1>
                <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p class="lead">
                    <a href="/#" class="btn btn-lg btn-secondary fw-bold border-cyan bg-black">Learn more</a>
                </p>
            </div>
        </div>
    )
}
