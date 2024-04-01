import { useEffect, useState } from 'react'
import Navbar, { Header } from '../navbar/navbar'
import { Link, useParams } from 'react-router-dom';

const Subproduct = (x) => {
    const {id}=useParams();
    useEffect(()=>{
        loadrecord();
    },[]);

    const [catdata,setcatdata]=useState([]);
    const [prodata,setprodata]=useState([]);
 
    const loadrecord=async()=>{
        const rec = await fetch ("http://127.0.0.1:4001/subcat",{
            method:"POST",
            headers:{"content-type":"application"},
            body:JSON.stringify({cateid:id})
        })
        const data =await rec.json();
        setcatdata(data);
    }

    const loadpro=async(p)=>{
        const rec = await fetch ("http://127.0.0.1:4001/probysubcat",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  scid: p })
        })
        const data = await rec.json();
        setprodata(data);
        console.log(data);
        
    }

    return (

        <>
            <Header />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <nav className="navbar navbar-expand-sm bg-light navbar-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse text-muted" id="collapsibleNavbar">
                                    <ul className="navbar-nav nav flex-column">
                                        {
                                            catdata.map((x)=>{
                                                return(
                                                    <Link onClick={()=>{loadpro(x._id)}}>{x.subcategory}</Link>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subproduct