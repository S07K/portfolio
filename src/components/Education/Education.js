import React, { useEffect } from "react";
import styles from "../../css/education.module.css"
import TimeLine from "./TimeLine";
import { switchViewHandler } from '../NavigationHandler';
import { useSelector, useDispatch } from 'react-redux';

const Education = ({ isActive }) => {
    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        switchViewHandler('edu', navState, dispatch)
    }, [])

    return (isActive ? <div className={styles.education}>
        <div>
            <h1>
                Education
            </h1>
        </div>
        <TimeLine />
    </div> : '')
}

export default Education