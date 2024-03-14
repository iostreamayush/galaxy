import { useEffect, useState } from "react";
import Admindashbord from "../Dashbord/admindashbord";

const Subcategory=()=>{
    const[subacategory,setsubcategory]=useState("");
    const[selectcat,setselectcat]=useState("");
    const[catdata,setdatactcat]=useState([]);
    const[subdata,setsubdata]=useState([]);

    useEffect(()=>{
        catload();
        loadreacord();
    },[]);
    
    const fun1=(e)=>{
        setsubcategory(e.target.value)
    }
    const fun2=(e)=>{
        setselectcat(e.target.value)
    }

 const save=async()=>{
    if(selectcat==="")
    {
        alert("please select category")
    }
    else if(subacategory==="") {
        alert("enter subcategory item....")

    }
    else{
        const rec = await fetch("http://127.0.0.1:4001/sub",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({ c:selectcat ,subcat:subacategory})
        })

        const data =await rec.json();
        alert(data.msg);
        loadreacord();
    }
 }
 //get category
 const catload=async()=>{

    const rec=await fetch ("http://127.0.0.1:4001/category",{
        method:"GET",
        headers:{"content-type":"application/json"}
    })

    const data=await rec.json();
    setdatactcat(data);
    

 }
 //get subcategory

 const loadreacord=async()=>{

    const rec=await fetch ("http://127.0.0.1:4001/sub",{
        method:"GET",
        headers:{"content-type":"application/json"}
    })

    const data=await rec.json();
    setsubdata(data);
 }

 const deleterecord=async(m)=>{
    if(window.confirm("Are you sure")){
    const rec=await fetch("http://127.0.0.1:4001/sub",{
        method:"DELETE",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({rid:m})
    })
    const data=await rec.json();
    alert(data.msg);
    loadreacord();
    }
 }

    return(
        <>
        <Admindashbord></Admindashbord>
        <button type="button" className="btn btn-danger float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                 open SubCategory
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
                     {subdata.map((x) => {
                        return (
                            <tr>
                                <td>{}</td>
                                <td>{x.subcategory}</td>
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
                            <h4 className="modal-title"> Add SubCategory Item</h4>
                            
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                
                            </button>
                            
                        </div>
                    

                        <div className="modal-body">
                            <label htmlFor="">Category</label>&nbsp;&nbsp;
                            <select  onChange={fun2} name="" id="" className="form-control">
                                <option value="select">--select category---</option>
                                {catdata.map((x)=>{
                                    return(
                                        <option value={x._id}>{x.category}</option>
                                    )
                                })}

                            </select>&nbsp;
                        <input type="text" className='form-control' placeholder='enter Sub  category name here.....' required onChange={fun1} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={save}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subcategory;