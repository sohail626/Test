import React from 'react'
import { logoImage } from '../Images/image'
import logo from "../Images/logo1.png"

 function Logo() {
    return (
        <>
            <a href="#" class="navbar-logo" >
                <img src={logoImage} />
            </a>
        </>
    )
}
export default Logo