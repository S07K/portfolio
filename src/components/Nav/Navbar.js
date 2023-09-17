import styles from '../../css/navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchViewHandler } from '../NavigationHandler';

const Navbar = () => {

    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()

    const switchNav = (nav) => {
        switchViewHandler(nav, navState, dispatch)
    }

    // console.log('navState:::', navState)
    return (
        <div className={`${styles.navWrapper} + ${!navState.intro ? styles.slateTheme : ''}`}>
            <div
                className={styles.brand}

            >
                <Link to="/portfolio" onClick={() => switchNav('intro')}><span>Shubham</span></Link>
            </div>
            <div>
                <Link to="/experience" onClick={() => switchNav('exp')}><span>Experience</span></Link>
            </div>
            <div>
                <Link to="/education" onClick={() => switchNav('edu')}><span>Education</span></Link>
            </div>
            <div>
                <Link to="/projects" onClick={() => switchNav('projects')}><span>Projects</span></Link>
            </div>
        </div>
    );
}


export default Navbar