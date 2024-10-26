import React, { useState, useEffect } from "react"
import styles from '../../css/card.module.css'
import Skeleton from 'react-loading-skeleton'



const Card = ({ id, data }) => {
    const { img, name, url, description, techStack } = data
    const [skeletonVisible, toggleSkeleton] = useState(true)

    const delay = () => {
        setTimeout(() => {
            toggleSkeleton(false);
        }, 1000);
    }
    // Adjust the delay time as needed.

    return (
        <div className={styles.cardWrapper}>
            <a href={url} target="_blank">
                <div className={styles.imgWrapper}>
                    {skeletonVisible ? (<><Skeleton width="100%" height="200px" /><img style={skeletonVisible ? {display: 'none'} : {}} src={img} onLoad={delay}></img></>) : (<img src={img}></img>)}
                </div>
                <div className={styles.details}>
                    <div className={styles.heading}>{name}</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.techStack}>{techStack}</div>
                </div>
            </a>
        </div>
    )
}

export default Card