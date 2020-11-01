import React from "react"
import Link from "next/link";

const Navbar = ()=>{
    return(
        <>
        <nav>
             <div className="dot-group">
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
                <span className="nav-dot"></span>
            </div>
            <div className="link">Contact me</div>
        </nav>
           

        </>
    )
}

export default Navbar