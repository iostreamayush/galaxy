import React from 'react'
import "./contact.css"
import conatctimage from '../../../assest/contactimage.jpg'
import Navbar, { Header } from '../navbar/navbar'
import Footer from '../footer/Footer'

const Contact = () => {
    return (
        <>
        <Header/>
        <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-sm text-center  ">
                        <div className='contactpage'> <span className="contact">C</span>ontact <span className='contact'>U</span>s
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className='locationbox'>
                            <i className="material-icons location">place</i>
                            <p className='loactionaddress'>Main road lucknow</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='locationbox'>
                            <i className="material-icons location">phone</i>
                            <p className='loactionaddress'>+9132245586</p>
                        </div>
                    </div>
                    <div className="col-sm-4"><div className='locationbox'>
                        <i className="material-icons location">email</i>
                        <p className='loactionaddress'>abc@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm">
                        <div className="contact-img">
                            <img src={conatctimage} style={{ width: "28vw" }} alt="" />
                        </div>
                    </div>
                    <div className="col-sm">
                        <section className='section-form'>
                            <form>
                                <div className='form-box fs-3'>
                                    <label htmlFor="username">Name</label>
                                    <input className='form-control' type="text" name='username' id='username' autoComplete='off' required />
                                    <label htmlFor="username">Email</label>
                                    <input className='form-control' type="email" name='username' id='useremail' autoComplete='off' required />
                                    <label htmlFor="username">Message</label>
                                    <textarea className='form-control' name="message" id="" cols="75" rows="5"></textarea>
                                    <br />
                                    <button className='btn-send' type='sumit'>Send</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact