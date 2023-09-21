import React, { useState, useEffect } from "react";
import styles from '../../css/experience.module.css'
import '../../css/timeline.css'
import Details from "./Details";
import { switchViewHandler } from '../NavigationHandler';
import { useSelector, useDispatch } from 'react-redux';

const Experience = ({ isActive }) => {
    const [year, change] = useState('2023')

    const toggleYear = (yr) => {
        change(yr);
    }

    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        switchViewHandler('exp', navState, dispatch)
    }, [])

    return (isActive ?
        <div className={styles.experience}>
            <div>
                <h1>
                    Experience
                </h1>
                <div className={styles.timeline}>
                    <br /><br />
                    <ul className="base-timeline">
                        <li className="base-timeline__item base-timeline__item--data dot">
                        </li>
                        <li className="base-timeline__item base-timeline__item--data"
                            data-year="2019" onClick={() => toggleYear('2019')}>
                        </li>
                        <li className="base-timeline__item base-timeline__item--data"
                            data-year="2020" onClick={() => toggleYear('2020')}>
                        </li>
                        <li className="base-timeline__item base-timeline__item--data"
                            data-year="2021" onClick={() => toggleYear('2021')}>
                        </li>
                        {/* <li className="base-timeline__item base-timeline__item--data"
                            data-year="2022">
                        </li> */}
                        <li className="base-timeline__item base-timeline__item--data graduate-dot" title="Graduated" onClick={() => toggleYear('2022')}>
                        </li>
                        <li className="base-timeline__item base-timeline__item--data base-timeline__item--active"
                            data-year="2023" onClick={() => toggleYear('2023')}>
                        </li>
                        <li className="base-timeline__item base-timeline__item--data dot last-dot">
                        </li>
                    </ul>
                </div>
            </div>
            <br></br>
            <Details year={year}/>
        </div> : '')
}

export default Experience