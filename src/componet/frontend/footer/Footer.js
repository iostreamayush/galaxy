import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="contanier-fluid mt-5 footer ">
        <div className="row">
          <div className="col-sm-4">
            <h2 className='links'> QuickLinks</h2>
            <ul className='linklist '>
              <li className='listitems'> <Link to="/" className='linkitems'>Home</Link>   </li>
              <li className='listitems'> <Link className='linkitems'>Product</Link> </li>
              <li className='listitems'> <Link to="contact" className='linkitems'>Contact</Link></li>
              <li className='listitems'> <Link to="/about" className='linkitems'>About</Link></li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h2 className='links'>Get In Touch</h2>
            <ul className='linklist '>
              <li className='listitems' > <Link  className='linkitems'> <i  className="material-icons followicons ">phone</i> 452668852</Link></li>
              <li className='listitems'>  <Link className='linkitems'> <i  className="material-icons followicons ">email</i>Contact</Link></li>
              <li className='listitems'> <Link className='linkitems'> <i  className="material-icons followicons ">place</i>-----------</Link></li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h2 className='links'>Follow On</h2>
            <ul className='linklist '>
              <li className='listitems'><Link className='linkitems'> <i  className="material-icons followicons ">facebook</i></Link></li>
              <li className='listitems'><Link className='linkitems'> <i className="material-icons followicons">email</i></Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="footerend">
              <h2 className='allright'>All right are Reserved</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer