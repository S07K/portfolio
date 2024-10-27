import { useDispatch, useSelector } from 'react-redux'
import '../../css/darkModeButton.css'
import { switchMode } from '../store/dataSlice'

const DarkModeButton = ({style, onSwitch}) => {
    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.navstate.darkMode)

    const bgSwitch = (e) => {
        if (e.target.checked) {
            dispatch(switchMode(true))
        } else {
            dispatch(switchMode(false))
        }
        onSwitch()
    }

    return (
        <div className={style}>
                <input name='darkModeBtn' className={darkMode ? 'lightModeBtn' : 'darkModeBtn'} type="checkbox" onChange={(e) => bgSwitch(e)} checked={darkMode} />
        </div>
    )
}

export default DarkModeButton