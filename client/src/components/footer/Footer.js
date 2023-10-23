import React from 'react'
import {Link} from 'react-router-dom';
// import rklogo from 'public/rklogo.cdr'
import './Footer.css'

const Footer = () => {
  return (
    <div className="row" style={{boxSizing:"border-box",backgroundColor:"steelblue"}}>
        <div className="col-lg-4 col-md-4 col-sm-12" style={{color:"white",margin:"20px"}}>
            <h4>About RK Pharmaceuticals</h4>
            <p>RK Pharmaceuticals is one of the Top PCD Pharma Franchise Companies in India. We, at RK Pharmaceuticals offer best pharmaceutical Products at very affordable prices. Our professional & quality services make us India's most trusted Pharma Franchise Company.</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12" style={{color:"white",margin:"20px"}}>
            <h4>Quick Links</h4>
            <ul>
              <Link to='/home' target='_blank'><li style={{color:"white"}}>Home</li></Link>
              <Link to='/home' target='_blank'><li style={{color:"white"}}>About Us</li></Link>
              <Link to='/home' target='_blank'><li style={{color:"white"}}>Products</li></Link>
              <Link to='/home' target='_blank'><li style={{color:"white"}}>Contact Us</li></Link>
            </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12" style={{color:"white",margin:"20px"}}>
            <h4>Contact Info</h4>
            <img src={"./rklogo1o.ico"} alt="RKP"/>
            <div>
            <div style={{display:"flex"}}>

            <i style={{marginTop:"4px"}} class="fa fa-map" aria-hidden="true"></i>
            <div style={{paddingLeft:"10px"}}>222,Lakhanda Wala Kuan,Near Bijli Ghar,Alwar,Rajasthan-301001</div>
            </div>
            </div>
            <div>
            <div style={{display:"flex"}}>

            <i style={{marginTop:"4px"}} class="fa fa-phone-alt" aria-hidden="true"></i>
            <div style={{paddingLeft:"10px"}}>+91 9414892992, +91 9783162860</div>
            </div>
            </div>
            <div>
            <div style={{display:"flex"}}>
            <i style={{marginTop:"4px"}} class="fa fa-envelope" aria-hidden="true"></i>
            <div style={{paddingLeft:"10px"}}>rkalw201@gmail.com</div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer