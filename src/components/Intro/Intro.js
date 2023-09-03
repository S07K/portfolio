import styles from '../../css/intro.module.css';
import img from '../../assets/images/mewithoutbg.png';
import { TypeAnimation } from 'react-type-animation';

const Intro = ({ isActive }) => {
    return (
        isActive ?
            <>
                <div className={styles.introWrapper}>
                    <div className={styles.introLines}>
                        <p className={styles.greet}>Hola!</p>
                        <code className={styles.code}>&lt;<span style={{ color: 'var(--primary-blue)' }}>Code</span> + <span style={{ color: 'var(--primary-blue)' }}>Design</span>/&gt;</code>
                        <p className={styles.bigFont}>I'm
                            <TypeAnimation
                                className={styles.name}
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    " Shubham.",
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    " a UI Engineer."
                                ]}
                                wrapper="span"
                                speed={10}
                                deletionSpeed={2}
                                preRenderFirstString={true}
                                repeat={Infinity}
                            />
                        </p>
                        <span className={styles.feel}><i>Glad to have you here</i> :)</span>
                        <div className={styles.socialAccounts}>
                        </div>

                    </div>
                    <div className={styles.imgWrapper}>
                        {/* <div className={styles.meImg}> */}
                        <img src={img} alt={"shubham"}></img>
                        {/* </div> */}
                    </div>
                </div>
                <div className={styles.brief}>
                    <div>
                        <h1>
                            About
                        </h1>
                    </div>
                    <div>
                        <p>
                            A self-taught <b>Frontend Web Developer</b> , curious to learn new web technologies and make interactive UI. I also have <b>interest in UI/UX Designing</b>.
                        </p>
                        <h2>What am I doing right now ?</h2>
                        <p>
                            Currently working as a <b>Software Engineer</b> at <b>EnableX</b>.
                            Within my role, I am proficient in <b>JavaScript</b> for managing the UI in accordance with <b>third party APIs</b> responses. Moreover, I play a key role in the software's development by implementing new features and enhancing its functionality. Additionally, I take full ownership of the integrated features, ensuring their successful integration and optimal performance.
                        </p>
                    </div>
                </div>
            </>
        : ''
    )
}

export default Intro