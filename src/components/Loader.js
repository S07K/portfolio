import React, { useState, useEffect } from "react";
import styles from '../css/loader.module.css';

const Loader = ({ loading }) => {
    const [shouldRender, setShouldRender] = useState(loading);

    useEffect(() => {
        if (!loading) {
            // Wait for slideOut animation to complete (300ms) before unmounting
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setShouldRender(true);
        }
    }, [loading]);

    if (!shouldRender) return null;

    return (
        <div className={styles.wrapper + ` ${loading ? styles.loading : styles.slideOut}`}>
            <div>
                <h1>Welcome!</h1>
            </div>
            <div className={styles.dotTyping}></div>
            <br />
            <div style={{ width: '80%', textAlign: 'center' }}>
                <i style={{ color: 'var(--primary-blue)' }}>I hope you like it. Please wait a moment</i>
            </div>
        </div>
    );
};

export default Loader;