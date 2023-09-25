import React, { useEffect } from "react";
import styles from "../../css/education.module.css"
import TimeLine from "./TimeLine";
import { switchViewHandler } from '../NavigationHandler';
import { useSelector, useDispatch } from 'react-redux';
import Reveal from "../Reveal";

const Education = ({ isActive }) => {
    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        switchViewHandler('edu', navState, dispatch)
    }, [])

    return (isActive ? <div className={styles.education}>
        <div>
            <Reveal type="horizontal">
                <h1>
                    Education
                </h1>
            </Reveal>
        </div>
        <TimeLine />
    </div> : '')
}

export default Education