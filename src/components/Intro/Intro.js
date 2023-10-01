import styles from '../../css/intro.module.css';
import img from '../../assets/images/mewithoutbg.png';
import { TypeAnimation } from 'react-type-animation';
import {ReactComponent as Github} from '../../assets/images/github.svg'
import {ReactComponent as Insta} from '../../assets/images/instagram.svg'
import {ReactComponent as Fb} from '../../assets/images/facebook.svg'
import {ReactComponent as Twitter_X} from '../../assets/images/twitter-x.svg'
import {ReactComponent as LinkedIn} from '../../assets/images/linkedin.svg'
import { useEffect, useState } from 'react';
import { switchViewHandler } from '../NavigationHandler';
import { setLoading } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Reveal from '../Reveal'

const urls = {
    github: 'https://github.com/S07K',
    insta: 'https://www.instagram.com/sam_07_00_/',
    facebook: 'https://www.facebook.com/profile.php?id=100012603552078',
    twitter_x: 'https://twitter.com/sam_07_00_',
    linkedin: 'https://www.linkedin.com/in/shubham-kumar-957a33200/',
}

const Intro = ({ isActive }) => {

    const openUrl = (url_for) => {
        window.open(urls[url_for], '_blank')
    }

    const loading = useSelector((state) => state.navstate.loading)
    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        switchViewHandler('intro', navState, dispatch)
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 2000);
    }, [])

    return (
        isActive ?
            <>
                <Loader loading={loading} />
                <div className={styles.introWrapper}>
                    <div className={styles.introLines}>
                        <Reveal>
                            <p className={styles.greet}>Hola!</p>
                        </Reveal>
                        <Reveal>
                            <code className={styles.code}>&lt;<span style={{ color: 'var(--primary-blue)' }}>Code</span> + <span style={{ color: 'var(--primary-blue)' }}>Design</span>/&gt;</code>
                        </Reveal>
                        <Reveal>
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
                                    speed={{type: "keyStrokeDelayInMs", value: 200}}
                                    deletionSpeed={2}
                                    preRenderFirstString={true}
                                    repeat={Infinity}
                                />
                            </p>
                        </Reveal>
                        <Reveal type="horizontal">
                            <span className={styles.feel}><i>Glad to have you here</i> :)</span>                        
                        </Reveal>
                        <div className={styles.socialAccounts}>
                            <Github onClick={() => openUrl('github')}/> 
                            <Insta onClick={() => openUrl('insta')}/>
                            <Fb onClick={() => openUrl('facebook')}/>
                            <Twitter_X onClick={() => openUrl('twitter_x')}/>
                            <LinkedIn onClick={() => openUrl('linkedin')}/>
                        </div>

                    </div>
                    <div className={styles.imgWrapper}>
                        {/* <div className={styles.meImg}> */}
                        <img src={img} alt={"shubham"}></img>
                        {/* </div> */}
                    </div>
                </div>
                <div className={styles.brief}>
                    <Reveal>
                        <div>
                            <h1>
                                About
                            </h1>
                        </div>
                    </Reveal>
                    <div>
                        <Reveal>
                            <p>
                                A self-taught <b>Frontend Web Developer</b>, curious to learn new web technologies and make interactive UI. I also have <b>interest in UI/UX Designing</b>.
                            </p>
                        </Reveal>
                        <Reveal>
                            <h2>What am I doing right now ?</h2>
                        </Reveal>
                        <Reveal>
                            <p>
                                Currently working as a <b>Software Engineer</b> at <b>EnableX</b>.
                                Within my role, I am proficient in <b>JavaScript</b> for managing the UI in accordance with <b>third party APIs</b> responses. Moreover, I play a key role in the software's development by implementing new features and enhancing its functionality. Additionally, I take full ownership of the integrated features, ensuring their successful integration and optimal performance.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </>
        : ''
    )
}

export default Intro