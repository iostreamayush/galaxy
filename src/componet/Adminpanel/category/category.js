import React, { useEffect, useState } from 'react'
import Admindashbord from '../Dashbord/admindashbord';

const Category = () => {

    const [cate, setcategory] = useState("");
    const [mdata, setmdata] = useState([]);

    useEffect(() => {
        loadrecord();
    }, []);

    const fun1 = async (e) => {
        setcategory(e.target.value)
    }

    const save = async () => {
        if (cate === "") {
            alert("enter category name");
        }
        else {
            const rec = await fetch("http://127.0.0.1:4001/category", {
                method: "POST",
                headers: { "Content-type": "Application/json" },
                body: JSON.stringify({ cate: cate })
            })

            const data = await rec.json();
            alert(data.msg);
            loadrecord();
        }
    }

    const loadrecord = async () => {
        const rec = await fetch("http://127.0.0.1:4001/category", {
            method: "GET",
            headers: { "Content-Type": "Application/json" },
        })
        const data = await rec.json();
        setmdata(data);
        
    }

    const deleterecord=async(m)=>{
        if(window.confirm("Are you sure")){
            const rec=await fetch("http://127.0.0.1:4001/category",{
                method:"DELETE",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({rid:m})
            })
            const data=await rec.json();
            alert (data.msg);
            loadrecord();
        }
    }

    return (
        <div>
            <Admindashbord />

            <button type="button" className="btn btn-danger p-3 float-end m-2" data-bs-toggle="modal" data-bs-target="#myModal">
                open Category

            </button>

            <table className='table table-bordered'> 
                <thead>
                    <tr>
                        <th>no</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                     {mdata.map((x) => {
                        return (
                            <tr>
                                <td>{"1*1=1"}</td>
                                <td>{x.category}</td>
                                <td>
                                    <button className='btn btn-danger  p-3 float-end me-2 h3'onClick={()=>{deleterecord(x._id)}} >Delete</button>&nbsp;&nbsp;
                                    <button className='btn btn-warning p-3 float-end  me-3 h3'>Edit</button>&nbsp;
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


            <div className="modal float-center my-5 " id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"> Add Category Item</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <input type="text" className='form-control' placeholder='enter category name here.....' required onChange={fun1} />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={save} >Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;
