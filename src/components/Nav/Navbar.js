import styles from '../../css/navbar.module.css';
import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import { switchView } from '../store/dataSlice'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()

    const switchViewHandler = (key) => {
        const newData = cloneDeep(navState)
        let lastActiveView = Object.keys(newData).filter(key => newData[key] === true)
        newData[lastActiveView] = false
        newData[key] = true
        dispatch(switchView(newData))
    }
    // console.log('navState:::', navState)
    return (
        <div className={`${styles.navWrapper} + ${!navState.intro ? styles.slateTheme : ''}`}>
            <div
                className={styles.brand}

            >
                <Link to="/portfolio"><span onClick={() => switchViewHandler('intro')}>Shubham</span></Link>
            </div>
            <div>
                <Link to="/experience"><span onClick={() => switchViewHandler('exp')}>Experience</span></Link>
            </div>
            <div>
                <Link to="/education"><span onClick={() => switchViewHandler('edu')}>Education</span></Link>
            </div>
            <div>
                <Link to="/projects"><span onClick={() => switchViewHandler('projects')}>Projects</span></Link>
            </div>
        </div>
    );
}


export default Navbar