import React from 'react'
import { logoImage } from '../Images/image'
// import logo from "../Images/logo1.png"

 function Logo() {
    return (
        <>
            <a href="/" class="navbar-logo" >
                <img src={logoImage} alt="logo" />
            </a>
        </>
    )
}
export default Logo