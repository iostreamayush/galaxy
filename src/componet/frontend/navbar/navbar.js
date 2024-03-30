import React, { useEffect, useState } from 'react'
import { Link,  } from 'react-router-dom'
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
//---------------------------------------------Menu--------------------------------------------------------------
const Menu = () => {
    const [catdata, setcatdata] = useState([]);
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
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">

                                {
                                    catdata.map((x) => {
                                        return (

                                            <Link className="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                                to="/subproduct">{x.category}
                                            </Link>
                                        )
                                    })}
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


// const Productpic = async (x) => {
//     return (
//         <>

//             <div className="card ">
//                 {/* <img className="img" src={"http://127.0.0.1:4001/" + x.img} /> */}
//                 <div className="card-body">
//                     <h4 className="card-title"></h4>
//                     <p className="card-text h5">
                        
//                         <p>rrr</p>
//                     </p>
//                 </div>
//             </div>
//         </>

//     )
// }

export default Navbar
export { Menu, whatsapp, Header, }
