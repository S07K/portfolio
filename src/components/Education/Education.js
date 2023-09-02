import React from "react";
import styles from "../../css/education.module.css"
import TimeLine from "./TimeLine";

const Education = ({ isActive }) => {
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