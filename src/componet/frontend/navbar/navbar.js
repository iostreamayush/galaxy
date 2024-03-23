import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './navbar.css'
import whatsapp from '../../../assest/whatsapp.jpeg'

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-info py-2">
                    <div className="col-sm">
                        <i class="fa fa-address-book h2 float-start fs-3 fw-bold ">+91444 9999 55</i>

                    </div>
                    <div className="col-sm">
                        <i class="	fa fa-user fs-3 float-end"></i>

                    </div>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse   " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-4 fw-normal float-center ">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" href="#">service</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" href="#">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" href="#">product</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Whatsapp />
        </>
    )










}

const Menu = () => {
    const [catdata, setcatdata] = useState([]);
    const [prodata, setprodata] = useState([]);
    useEffect(() => {
        loadrecord();
    }, [])
    // --------------------------category--------------------
    const loadrecord = async () => {
        const rec = await fetch("http://127.0.0.1:4001/category", {
            method: "GET",
            headers: { "content-type": "application/json" }
        })
        const data = await rec.json();
        setcatdata(data);
    }
    //-----------subcategory-----------------
    const onproduct = async (p) => {
        const rec = await fetch("http://127.0.0.1:4001/probysubcate", {
            method: "POST",
            headers: { "content:type": "application/json" },
            body: JSON.stringify({ scid: p })
        })

        const data = await rec.json();
        setprodata(data);
        console.log(data.length);

    }







    return (
        <>

            <nav class="navbar navbar-expand-sm navbar-dark bg-dark  ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">

                            {
                            catdata.map((x) => {
                                return (

                                    <Link class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        to={"/subproduct/" + x._id}>{x.category}

                                    </Link>

                                )
                            })}
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                {
                                prodata.map((x) => {
                                    return (
                                        <li><Link class="dropdown-item" onClick={() => { onproduct(x._id) }}>{x.sucat}</Link></li>

                                    )
                                })
                            }
                                   
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

const Whatsapp = () => {
    return (
        <>
            <div className='whats_float'>
                <Link href="https://wa.me/917311113314?text=hii" target="_blank"></Link> <img src={whatsapp} alt="" style={{ width: "70px" }} className="whatsbtn" />

            </div>
        </>
    )
}

export default Navbar
export { Menu, whatsapp, Header }
