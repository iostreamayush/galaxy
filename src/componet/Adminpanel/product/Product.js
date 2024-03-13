import React from 'react'
import Admindashbord from '../Dashbord/admindashbord'

const Product = () => {
    return (
        <div>
            <Admindashbord></Admindashbord>
            <button type="button" className="btn btn-danger float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                Add Item
            </button>

            <div className="modal float-center my-5 " id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"> Add Item</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <label class="form-label">Category:</label>
                            <select class="form-select">
                                <option>1</option>
                            </select>
                            <label class="form-label"> Select Subcategory:</label>
                            <select class="form-select">
                                <option>1</option>
                            </select>
                            <label class="form-label">Item:</label>
                            <input type="text" className='form-control' placeholder='enter category name here.....' required />
                            <label class="form-label">Price:</label>
                            <input type="text" className='form-control' placeholder='enter category name here.....' required />
                            <label class="form-label">Discount:</label>
                            <input type="text" className='form-control' placeholder='enter here.....' required />
                            <label class="form-label">Description:</label>
                            <input type="text-area" className='form-control' placeholder='Write here.....' required />
                            <label class="form-label">Photo:</label>
                            <input type="file" className='form-control'required />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
