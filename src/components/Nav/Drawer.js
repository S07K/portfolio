import styles from '../../css/drawer.module.css'
import { Link } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';

const Drawer = ({switchView, isOpen, closeDrawer}) => {
    return (
        <div className={`${styles.wrapper} ${isOpen ? `${styles.wrapper_active}` : `${styles.wrapper_inactive}`}`}>
            <div
                className={styles.brand}

            >
                <Link to="/portfolio" onClick={() => switchView('intro')}><span>About</span></Link>
            </div>
            <div className={styles.nav_switcher}>
                <Link to="/experience" onClick={() => switchView('exp')}><span>Experience</span></Link>
            </div>
            <div className={styles.nav_switcher}>
                <Link to="/education" onClick={() => switchView('edu')}><span>Education</span></Link>
            </div>
            <div className={styles.nav_switcher}>
                <Link to="/projects" onClick={() => switchView('projects')}><span>Projects</span></Link>
            </div>
            <DarkModeButton style={''} onSwitch={closeDrawer} />
        </div>
    )
}

export default Drawer