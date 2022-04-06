import React from "react";
import "./header.css";
// import profile from "../download/profile.png";
import siva from "../download/siva.jpg";

class Header extends React.Component {
    render() {
        return (
            <div id="home" className="header_wapp">
                <div className="header_left">
                    <div className="header_left_content">
                        <h1>Hi,</h1>
                        <h1>
                            I' am <span>Sivaramakrishnan</span>
                        </h1>
                        <ul className="dynamic-txts">
                            <li><span>Web Developer</span></li>
                            <li><span>Web Designer</span></li>
                            <li><span>YouTuber</span></li>
                            <li><span>Freelancer</span></li>
                        </ul>
                        <div className="contact_btn">
                            <a href="#contact" className="btn">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header_right">
                    <div className="profile_bg_r">
                        {/* src="https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" */}
                        <img
                            src={siva}
                            alt="profile"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
