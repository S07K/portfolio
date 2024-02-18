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
    insta: 'https://www.instagram.com/0700shubham/',
    facebook: 'https://www.facebook.com/profile.php?id=100012603552078',
    twitter_x: 'https://twitter.com/0700shubham',
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
                    <div style={{fontFamily: 'Poppins'}}>
                        <Reveal>
                            <p>
                                <b>Welcome</b> to my portfolio! 
                                <br />
                                <br />
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                                I am a passionate and <b>versatile Software Engineer</b> based in Noida, India, currently working at <b>ENABLEX</b>. 
                                With a strong foundation in languages such as <b>C++, Python, JavaScript, TypeScript, Ruby, HTML, and CSS</b>. 
                                I specialize in frontend development, API integration, and SaaS extension development.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                                In my current role at ENABLEX, I have played a pivotal role in integrating third-party APIs into the Chatbot Flow Builder Application, facilitating seamless data transfer to CRM systems like <b>ZOHO, Zendesk, and HubSpot</b>. 
                                As the Frontend Lead for the <b>Chatbot Builder SaaS Project</b>, I led the development efforts to deliver effective solutions and collaborated closely with design teams to create a user-centric interface.
                                I have a rich background as an Engineer Trainee at ENABLEX, where I showcased proficiency in JavaScript development, UX enhancement, and API integration. 
                                My ability to adapt quickly was demonstrated when I built the first Ruby application server within a challenging two-day timeframe.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                                In addition to my professional experience, I have contributed to open-source projects during my time as a Contributor in the GIRLSCRIPT WINTER OF CONTRIBUTING 2021 program, highlighting my commitment to community engagement and collaborative software development.
                                I hold a Bachelor of Science (Honors) in Computer Science from Shaheed Sukhdev College of Business Studies, University of Delhi, where I laid the academic groundwork for my career.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p>
                                Beyond coding, I enjoy playing sports, listening to music, and engaging in meaningful conversations. 
                                In my free time, I love exploring new tech stacks, showcasing my curiosity and enthusiasm for staying at the forefront of technology.
                                Explore my portfolio to learn more about my skills, projects, and the innovative solutions I bring to the world of software development!
                            </p>
                        </Reveal>
                    </div>
                </div>
            </>
        : ''
    )
}

export default Intro