import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchViewHandler } from '../NavigationHandler';
import Drawer from './Drawer';
import { toggleDrawer } from '../store/dataSlice';
import { playPageFlip } from '../SoundManager';
import styles from '../../css/navbar.module.css';

const Navbar = () => {
    const darkMode = useSelector((state) => state.navstate.darkMode);
    const isOpen = useSelector((state) => state.navstate.isOpen);
    const navState = useSelector((state) => state.navstate.data);
    const dispatch = useDispatch();

    const toggleHamburger = (state = null) => {
        const stateTo = state != null ? state : !isOpen;
        dispatch(toggleDrawer(stateTo));
    };

    const switchNav = (nav) => {
        playPageFlip();
        switchViewHandler(nav, navState, dispatch, toggleHamburger);
    };

    const activeStyle = (isActive) => {
        if (!isActive) return {};
        return {
            borderBottom: darkMode ? '2px solid #f1c40f' : '2px solid var(--primary-blue)',
            background: darkMode ? 'rgba(241, 196, 15, 0.05)' : 'rgba(9, 105, 218, 0.03)',
            color: darkMode ? '#f1c40f' : 'var(--primary-blue)'
        };
    };

    return (
        <>
            <div className={`${darkMode ? styles.darkMode : ''} ${styles.navWrapper}`}>
                <div className={styles.brand}>
                    <Link to="/portfolio" onClick={() => switchNav('intro')}>
                        <span style={{ color: darkMode ? '#8b949e' : '#57606a' }}>~/</span>
                        <span>shubham-portfolio</span>
                    </Link>
                </div>
                
                <Link to="/portfolio" onClick={() => switchNav('intro')}>
                    <div style={activeStyle(navState.intro)}>
                        <span>index.js</span>
                    </div>
                </Link>
                
                <Link to="/experience" onClick={() => switchNav('exp')}>
                    <div style={activeStyle(navState.exp)}>
                        <span>experience.git</span>
                    </div>
                </Link>
                
                <Link to="/education" onClick={() => switchNav('edu')}>
                    <div style={activeStyle(navState.edu)}>
                        <span>education.md</span>
                    </div>
                </Link>
                
                <Link to="/projects" onClick={() => switchNav('projects')}>
                    <div style={activeStyle(navState.projects)}>
                        <span>projects.json</span>
                    </div>
                </Link>

                <div 
                    onClick={() => toggleHamburger()}
                    className={isOpen ? `${styles.hamburger} ${styles.toggle}` : styles.hamburger}
                >
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </div>
            <Drawer isOpen={isOpen} switchView={switchNav} closeDrawer={() => toggleHamburger(false)} />
        </>
    );
};

export default Navbar;