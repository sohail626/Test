import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <>
            <div class="navbar-right">
                <Link to="#">Ground Truth Data</Link>
                <Link to="#">How It Works</Link>
                <Link to="#">Fee Structure</Link>
                <Link to="#">Example Deliverables</Link>
                <Link to="#">Submission portals</Link>
                <Link to="#">Contact Us</Link>
                <Link className="Sign-btn" href="#">Sign In</Link>

            </div>


        </>
    )
}

export default Nav
