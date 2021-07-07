import React from 'react'
import video from "../videos/homepage.mp4"

function Backgroundvideo() {
    return (
        <div>
             <video  autoPlay muted loop style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%,-50%)",
                zIndex: "-1"

            }}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Backgroundvideo
