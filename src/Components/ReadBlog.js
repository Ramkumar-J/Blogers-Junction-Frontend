import React from "react";
import { Link } from "react-router-dom";

function ReadBlog(){
    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-9 border border-3">
                <h1 className="mt-5 mb-2 fw-bold">I Know Wi-Fi But What is Li-Fi?</h1>
            <img className="img-size mt-3" src="https://img.jagranjosh.com/images/2021/January/2212021/Li-Fi-technology.jpg"></img>
            <p className="fs-5 mt-3 mb-2"><strong className="text-primary">Created By</strong> - Ramkumar J</p>
            <p className="fs-5"><strong className="text-primary">Published on</strong> - 22 Jan 2022</p>
            <h2 className="mt-3 mb-2 fw-bold">Introduction</h2>
            <p className="fs-5">LiFi, also known as "Light Fidelity" is a wireless optical networking technology, which uses light-emitting diodes (LEDs) to transmit data. In 2011, professor Harald Haas made a LiFi demonstration at the TED (Technology, Entertainment, Design) Global Talk on Visible Light Communication (VLC).</p>
            <h2 className="mt-3 mb-2 fw-bold">Contents</h2>
            <ol>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
            <p className="fs-5">When an electrical current goes through to a LED light bulb, a stream of light (photons) emits from the lamp. LED bulbs are semiconductor devices, which means that the brightness of the light flowing through them can change at extremely high speeds.  The signal is sent by modulating the light at different rates. The signal can then be received by a detector that interprets the changes in light intensity (the signal) as data.  Also when the LED is ON, you transmit a digital 1, and when it is OFF, you transmit a 0.</p>
            <p className="fs-5">When an electrical current goes through to a LED light bulb, a stream of light (photons) emits from the lamp. LED bulbs are semiconductor devices, which means that the brightness of the light flowing through them can change at extremely high speeds.  The signal is sent by modulating the light at different rates. The signal can then be received by a detector that interprets the changes in light intensity (the signal) as data.  Also when the LED is ON, you transmit a digital 1, and when it is OFF, you transmit a 0.</p>
            <p className="fs-5">When an electrical current goes through to a LED light bulb, a stream of light (photons) emits from the lamp. LED bulbs are semiconductor devices, which means that the brightness of the light flowing through them can change at extremely high speeds.  The signal is sent by modulating the light at different rates. The signal can then be received by a detector that interprets the changes in light intensity (the signal) as data.  Also when the LED is ON, you transmit a digital 1, and when it is OFF, you transmit a 0.</p>
            <h2 className="mt-3 mb-2 fw-bold">Conclusion</h2>
            <p className="fs-5">LiFi, also known as "Light Fidelity" is a wireless optical networking technology, which uses light-emitting diodes (LEDs) to transmit data. In 2011, professor Harald Haas made a LiFi demonstration at the TED (Technology, Entertainment, Design) Global Talk on Visible Light Communication (VLC).</p>
                </div>
                <div className="col-lg-3">
                    <div className="row position-fixed">
                        <div className="col-lg-12">
                        <img className="side-img" src="https://media.istockphoto.com/photos/-picture-id860887528?b=1&k=20&m=860887528&s=170667a&w=0&h=VXWyAWe6s6C_kgtF4ADyOM2y4xqgAVT_yr8BZyWmYTg="></img>
                    <h5 className="text-success fw-bold">Do You Want to write your own blog </h5>
                    <p className="fs-5 fw-bold text-success">Just Click Here*</p>
                    <Link to="/yourblog">
                        <button className="btn btn-primary btn-center">Create Blog</button></Link>
                        </div>
                    </div>
                   
                    {/* <img className="img-fluid mt-5" src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"></img>
                    <img className="img-fluid mt-5" src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"></img>
                    <img className="img-fluid mt-5" src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"></img>
                    <img className="img-fluid mt-5" src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"></img> */}
                </div>
            </div>
        </div>
    )
}

export default ReadBlog;