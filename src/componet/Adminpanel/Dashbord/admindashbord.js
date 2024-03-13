import React from 'react'
import { Link } from 'react-router-dom'

const Admindashbord = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark h3 bg-dark">
                <a className="navbar-brand" href="#">Admin Dashbord</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-center text-center" id="navbarNav">
                    <ul className="navbar-nav   text-center ml-auto">
                        <li className="nav-item active">
                            <Link className='nav-link' to="/category">Category</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link' to="/subcategory">Subcategory</Link>

                        </li>
                        <li className="nav-item float-end">
                        <Link className='nav-link' to="/product">Add items</Link>
                           
                        </li>
                    </ul>
                </div>
            </nav>
           
        </>
    )
}

export default Admindashbord