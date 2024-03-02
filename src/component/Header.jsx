import React from 'react';

const Header = ({ cartValue }) => {
    return (
        <div>
            {/* navbar elements            */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!"><h1>Products</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link active" href="#!">About</a></li>
                            <li className="nav-item ">
                                <a className="nav-link active" href="#">Shop</a>

                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartValue}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;