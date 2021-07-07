import React from 'react'
import Nav from './Nav'
import Logo from './Logo'

function Main() {
    return (
        <>

            <header>
                <div class="header">
                  <nav class="navigation">
                  <Nav/>

                  <Logo/>
                  <hr></hr>

                    </nav>
                </div>
            </header>


        </>
    )
}

export default Main
