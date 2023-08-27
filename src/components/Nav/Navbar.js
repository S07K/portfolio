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
                onClick={() => switchViewHandler('intro')}
            >
                <Link to="/"><span>Shubham</span></Link>
            </div>
            <div
                onClick={() => switchViewHandler('exp')}
            >
                <Link to="/experience"><span>Experience</span></Link>
            </div>
            <div
                onClick={() => switchViewHandler('edu')}
            >
                <Link to="/education"><span>Education</span></Link>
            </div>
            <div
                onClick={() => switchViewHandler('extraC')}
            >
                <Link to="/extra-curricular"><span>Extra-curricular</span></Link>
            </div>
        </div>
    );
}


export default Navbar