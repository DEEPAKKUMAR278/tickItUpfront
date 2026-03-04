/* HTML: <div class="loader"></div> */
import React from 'react'

function Loader({opacity="1"}) {
    return (
        <>
        <div className={`top-0 z-50 fixed w-full h-screen flex justify-center items-center`}
            style={{backgroundImage: "radial-gradient(circle,rgba(250,250,250,"+opacity+"), rgba(0,0,0,"+opacity+"))", backdropFilter:"blur(5px)"}}>
          <div className="loader"></div>
        </div>
        </>
    )
}

export default Loader
