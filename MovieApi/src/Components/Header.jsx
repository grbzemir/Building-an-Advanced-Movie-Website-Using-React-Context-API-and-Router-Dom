import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">İzlenecekler</div>
                    <ul className="nav-links">
                        <li>İzlenenler</li>
                    </ul>
                    <li>
                        <i className="fas fa-plus"></i>
                    </li>
                </div>
            </div>
        </header>

    );
};

export default Header;
