import React from "react";

const Unauthorized = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', fontFamily: 'poppins'}}>
            <h1 style={{marginBottom: '0'}}>404 Not Found</h1>
            <p style={{color: 'var(--primary-blue)'}}>This route doesn't exist.</p>
        </div>
    )
}

export default Unauthorized