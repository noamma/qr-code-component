import React from "react";
import "./App.css";
import  qrimg from "./img/image-qr-code.png"

const App = () => {
    
    return (
        <div className="container">
            <div className="card">
                <div className="img-wrapper">
                    <img src={qrimg}/>
                </div>
                <div className="par-wrappper">
                    <p className="desc">Improve your front-end skills by building projects</p>
                    <p className="inst">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    );
}

export default App