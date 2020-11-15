import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Liens utils</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/allProducts'>Products</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>nos Addresses</h5>
                    <address>
                    Paris Exactement au Maroc<br />
		              <i className="fa fa-phone fa-lg"></i>: +212611111111<br />
		              <i className="fa fa-fax fa-lg"></i>: +21211111111<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="FiverGig@gmail.com">
                         FiverGig@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/groups/461368354836295"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-aedin" href="http://www.aedin.com/in/"><i className="fa fa-aedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailhref:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auhref">
                    <p>© Copyright 2020 FiverGig </p>
                </div>
            </div>
        </div>
    </div>
    )
}
