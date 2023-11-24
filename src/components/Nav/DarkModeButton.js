import { useDispatch, useSelector } from 'react-redux'
import '../../css/darkModeButton.css'
import { switchMode } from '../store/dataSlice'
import { useEffect, useState } from 'react'

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
        <div className={`${style} darkModeBtn`}>
                <input type="checkbox" onChange={(e) => bgSwitch(e)} checked={darkMode} />
        </div>
    )
}

export default DarkModeButton