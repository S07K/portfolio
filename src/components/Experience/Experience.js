import React, { useState } from "react";
import styles from '../../css/experience.module.css'
import '../../css/timeline.css'
import Details from "./Details";

const Experience = ({ isActive }) => {
    const [year, change] = useState('2023')

    const toggleYear = (yr) => {
        console.log(yr)
        change(yr);
    }

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
                        <li className="base-timeline__item base-timeline__item--data dot">
                        </li>
                    </ul>
                </div>
            </div>
            <br></br>
            <Details year={year}/>
        </div> : '')
}

export default Experience