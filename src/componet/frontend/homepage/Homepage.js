import './firstpage.CSS'
import React from 'react'
import c1 from "../../../assest/co2.jpeg"
import c2 from "../../../assest/co3.jpeg"
import c3 from "../../../assest/cor1.jpg"
import Navbar, { Header, Menu } from '../navbar/navbar'
const Homepage = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                        <div className="col-sm-4"><Menu/>
                        </div>
                    <div className="col-sm-8 float-right">
                        <div id="demo" class="carousel slide carousel  "  data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={c3} alt="Los Angeles" className="d-block w-100 opacity-75% " id='corl' style={{}} />
                                </div>
                                <div class="carousel-item">
                                    <img src={c1} alt="Chicago" className="d-block w-100" id='corl' />
                                </div>
                                <div class="carousel-item">
                                    <img src={c2} alt="New York" className="d-block w-100" id='corl' />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Homepage
