import React, { useState, useEffect } from 'react'
import Admindashbord from '../Dashbord/admindashbord'

const Product = () => {
    const [item, setitem] = useState("");
    const [price, setprice] = useState("");
    const [discount, setdiscount] = useState("");
    const [description, setdescription] = useState("");
    const [subcat, setsubcat] = useState("");
    const [imgdata, setimgdata] = useState("");
    const [catdata, setcatdata] = useState([]);
    const [subcatdata, setsubcatdata] = useState([]);
    const [productdata, setproductdata] = useState([]);

    useEffect(() => {
        loadrecord();
        catloadrecod();
    }, []);

    const subcate = (e) => {
        setsubcat(e.target.value);
    }
    const fun1 = (e) => {
        setitem(e.target.value);
    }
    const fun2 = (e) => {
        setprice(e.target.value);
    }
    const fun3 = (e) => {
        setdiscount(e.target.value);
    }
    const fun4 = (e) => {
        setdescription(e.target.value);
    }

    const picdata = (e) => {
        setimgdata(e.target.files[0]);
    }

    const save = async () => {
        if (subcat === "") {
            alert("select subcategory");
        }

        else if (item === "") {
            alert("enter iteam");
        }
        else if (price === "") {
            alert("enter price")
        }

        else if (discount === "") {
            alert("enter discount");
        }

        else if (description === "") {
            alert("enter description about the product");
        }
        else {
            const fdata = new FormData();
            fdata.append("scat", subcat);
            fdata.append("pro", item);
            fdata.append("price", price);
            fdata.append("dis", discount);
            fdata.append("desc", description);
            fdata.append("pro_pic", imgdata);

            const rec = await fetch("http://127.0.0.1:4001/proo", {
                method: "POST",
                body: fdata
            })



            const data = await rec.json();
            alert(data.msg);
            loadrecord();
        }
    }
    const loadrecord = async () => {
        const rec = await fetch("http://127.0.0.1:4001/proo", {
            method: "GET",
            headers: { "content-type": "application/json" }
        })
        const data = await rec.json();
        setproductdata(data);
    }



    const catloadrecod = async () => {
        const rec = await fetch("http://127.0.0.1:4001/category", {
            method: "GET",
            headers: { "content-type": "application/json" }
        });
        const data = await rec.json();
        setcatdata(data);
    }

    const subcatloadrecord = async (k) => {
        const rec = await fetch("http://127.0.0.1:4001/subcat", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ c: k.target.value })

        })
        const data = await rec.json();
        setsubcatdata(data);
    }

    //delete item

    const deleterecord = async (m) => {
        if (window.confirm("are yor srue")) {
            const rec = await fetch("http://127.0.0.1:4001/proo", {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ rid: m })
            })
            const data = await rec.json();
            alert(data.msg);
            loadrecord();
        }
    }


    return (
        <div>
            <Admindashbord></Admindashbord>
            <button type="button" className="btn btn-danger float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                Add Item
            </button>
            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-sm">

                        <table className='table table-bordered table-responsive-sm-md '>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>description</th>
                                    <th>Picture</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productdata.map((x) => {
                                    return (
                                        <tr>
                                            <td>{x.prod}</td>
                                            <td>{x.price}</td>
                                            <td>{x.discount}</td>
                                            <td>{x.description}</td>
                                            <td> <img style={{ width: "150px" }} src={"http://127.0.0.1:4001/" + x.pic} alt="img" /> </td>
                                            <td> <button className='btn btn-warning' onClick={() => { deleterecord(x._id) }}>delete</button> </td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>

            <div className="modal float-center my-5 " id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"> Add Item</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <label class="form-label">Category:</label>
                            <select onChange={subcatloadrecord} class="form-control">
                                <option value="select">-----select category-------</option>
                                {catdata.map((x) => {
                                    return (
                                        <option value={x._id}>{x.category}</option>
                                    )
                                })}
                            </select>
                            <label class="form-label"> Select Subcategory:</label>
                            <select onChange={subcate} class="form-select">
                                <option value="select">----select category----</option>
                                {subcatdata.map((x) => {
                                    return (
                                        <option value={x._id}>{x.subcategory}</option>
                                    )
                                })}
                            </select>
                            <label class="form-label">Item:</label>
                            <input type="text" className='form-control' placeholder='enter item name here.....' required onChange={fun1} />
                            <label class="form-label">Price:</label>
                            <input type="text" className='form-control' placeholder='enter price.....' required onChange={fun2} />
                            <label class="form-label">Discount:</label>
                            <input type="text" className='form-control' placeholder='enter here.....' required onChange={fun3} />
                            <label class="form-label">Description:</label>
                            <input type="text-area" className='form-control' placeholder='Write here.....' required onChange={fun4} />
                            <label class="form-label">Photo:</label>
                            <input type="file" className='form-control' required onChange={picdata} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={save}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;
