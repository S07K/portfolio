import styles from './intro.module.css';
import img from '../assets/images/mewithoutbg.png';
import { TypeAnimation } from 'react-type-animation';

export default  () => {
    return (
        <div className={styles.introWrapper}>
            <div className={styles.introLines}>
                <p className={styles.greet}>Hola!</p>
                <code className={styles.code}>&lt;<span style={{color: 'var(--primary-blue)'}}>Code</span> + <span style={{color: 'var(--primary-blue)'}}>Design</span>/&gt;</code>
                <p className={styles.bigFont}>I'm 
                    <TypeAnimation
                        className={styles.name}
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            " Shubham." ,
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
                
            </div>
            <div className={styles.imgWrapper}>
                {/* <div className={styles.meImg}> */}
                    <img src={img}></img>
                {/* </div> */}
            </div>
        </div>
    )
}