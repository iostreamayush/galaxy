import Admindashbord from "../Dashbord/admindashbord";

const Subcategory=()=>{
    return(
        <>
        <Admindashbord></Admindashbord>
        <button type="button" className="btn btn-danger float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                 open SubCategory
            </button>
            <div className="modal float-center my-5 " id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"> Add SubCategory Item</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                        <input type="text" className='form-control' placeholder='enter Sub  category name here.....' required />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subcategory;