import React from 'react'

const Contact = () => {
  return (
    <div>
        <div style={{fontWeight:"700", fontSize:"20px", color:"steelblue",display:"flex",justifyContent:"center",margin:"30px 0px",textDecoration:"underline"}}>Contact Information</div>
        <div className='row' style={{justifyContent:"space-around",border:"5px solid steelblue", borderRadius:"10px",height:"200px",marginBottom:"30px",alignItems:"center",margin:"10px 10px"}}>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div style={{display:"flex"}}>
                <i style={{marginTop:"4px"}} class="fa fa-map" aria-hidden="true"></i>
                <div style={{paddingLeft:"10px"}}>222,Lakhanda Wala Kuan,Near Bijli Ghar,Alwar,Rajasthan-301001</div>
                {/* <div style={{borderRight:"1px solid steelblue",height:"200px"}}></div> */}
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div style={{display:"flex"}}>
                <i style={{marginTop:"4px"}} class="fa fa-phone-alt" aria-hidden="true"></i>
                <div style={{paddingLeft:"10px"}}>+91 9414892992, +91 9783162860</div>
                {/* <div style={{borderRight:"1px solid steelblue",height:"200px"}}></div> */}
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div style={{display:"flex"}}>
                <i style={{marginTop:"4px"}} class="fa fa-envelope" aria-hidden="true"></i>
                <div style={{paddingLeft:"10px"}}>rkalw201@gmail.com</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact