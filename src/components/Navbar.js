import styles from './navbar.module.css';

export default () => {
    return (
        <div className={styles.navWrapper}>
            <div className={styles.brand}>
                <span>Shubham</span>
            </div>
            <div>
                <span>Experience</span>
            </div>
            <div>
                <span>Education</span>
            </div>
            <div>
                <span>Extra-curricular</span>
            </div>
        </div>
    );
}