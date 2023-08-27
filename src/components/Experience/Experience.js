import React from "react";
import styles from '../../css/experience.module.css'
import '../../css/timeline.css'

const Experience = ({ isActive }) => {
    return (isActive ?
        <div className={styles.experience}>
            <div>
                <h1>
                    Experience
                </h1>
                <div className={styles.timeline}>
                    <br /><br />
                    <ul class="base-timeline">
                        <li class="base-timeline__item base-timeline__item--data dot">
                        </li>
                        <li class="base-timeline__item base-timeline__item--data"
                            data-year="2020">
                        </li>
                        <li class="base-timeline__item base-timeline__item--data"
                            data-year="2019">
                        </li>
                        <li class="base-timeline__item base-timeline__item--data graduate-dot" title="Graduated">
                        </li>
                        <li class="base-timeline__item base-timeline__item--data"
                            data-year="2021">
                        </li>
                        <li class="base-timeline__item base-timeline__item--data base-timeline__item--active"
                            data-year="2023">
                        </li>
                        <li class="base-timeline__item base-timeline__item--data dot">
                        </li>
                    </ul>
                </div>
            </div>
        </div> : '')
}

export default Experience