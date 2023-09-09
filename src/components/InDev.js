import React from "react";
import InDevSvg from "../assets/images/InDev.svg"

const wrapper = {
    position: 'absolute',
    background: 'white',
    zIndex: '10', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    height: '100vh', 
    textAlign: 'center',
    fontFamily: 'poppins', 
    padding: '10px 20px', 
    maxWidth: '-webkit-fill-available'
}

const InDev = () => {
    return (
        <div style={wrapper}>
            <div style={{ width: '150px', height: 'auto' }}>
                <img
                    src={InDevSvg}
                    style={{ width: '150px', maxWidth: '100%', height: 'auto' }} />
            </div>
            <h1 style={{ marginBottom: '0' }}>In Development</h1>
            <p style={{ color: 'var(--primary-blue)' }}>This device isn't supported yet. please open this website in any other device.</p>
            <h4 style={{ color: 'var(--primary-blue)' }}>Thank You!</h4>
        </div>
    )
}

export default InDev