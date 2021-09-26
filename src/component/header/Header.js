import React from 'react';
import "./header.css"
const Header = () => {
    return (
        // Navbar section from bootstrap....................................
        <div className="header-container mb-5">
            <nav className=" navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="/kids">KIDS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href="/blogs">Blogs</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <h1 className="text-center my-5 fst-italic">KIDS - BEAUTIFUL ORGANIZATION</h1>
            <h3 className="text-center fst-italic pb-5">Total Budget: 10 Million </h3>
        </div>
    );
};

export default Header;