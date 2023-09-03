import React from "react"
import styles from '../../css/card.module.css'



const Card = ({ id, data }) => {
    const { img, name, url, description, techStack } = data
    console.log('is that okay', name)
    return (
        <div className={styles.cardWrapper}>
            <a href={url} target="_blank">
                <div className={styles.imgWrapper}>
                    <img src={img}></img>
                </div>
                <div className={styles.details}>
                    <div className={styles.heading}>{name}</div>
                    <div className={styles.description}>{description}</div>
                </div>
            </a>
        </div>
    )
}

export default Card