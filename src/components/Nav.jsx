import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="#">Home</a>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
