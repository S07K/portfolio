import React from "react";
import styles from '../css/loader.module.css'
import Reveal from "./Reveal";

const Loader = ({loading}) => {
    return (
        <div className={styles.wrapper + ` ${loading ? styles.loading : styles.slideOut}`}>
            <div>
                {/* <Reveal> */}
                    <h1>
                        Welcome!
                    </h1>
                {/* </Reveal> */}
            </div>
            <div className={styles.dotTyping}></div>
            <br></br>
            <div style={{width: '80%', textAlign: 'center'}}>
                {/* <Reveal> */}
                    <i style={{color: 'var(--primary-blue)'}}>I hope you like it. Please wait a moment</i>
                {/* </Reveal> */}
            </div>
        </div>
    )
}

export default Loader