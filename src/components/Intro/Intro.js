import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ReactComponent as Github } from '../../assets/images/github.svg';
import { ReactComponent as Insta } from '../../assets/images/instagram.svg';
import { ReactComponent as Twitter_X } from '../../assets/images/twitter-x.svg';
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg';
import { ReactComponent as Youtube } from '../../assets/images/youtube.svg';
import { switchViewHandler } from '../NavigationHandler';
import { setLoading } from '../store/dataSlice';
import Loader from '../Loader';
import Reveal from '../Reveal';
import { playTapeTear, playStaplerClick } from '../SoundManager';

import imgMe from '../../assets/images/mewithbg.png';
import imgPostPro from '../../assets/images/PostProAI.png';
import imgAQI from '../../assets/images/AQIApp.png';

const urls = {
    github: 'https://github.com/S07K',
    insta: 'https://www.instagram.com/function.shubham/',
    facebook: 'https://www.facebook.com/profile.php?id=100012603552078',
    twitter_x: 'https://twitter.com/0700shubham',
    linkedin: 'https://www.linkedin.com/in/shubham-kumar-957a33200/',
    youtube: 'https://www.youtube.com/@LetsCodeWithSam'
};

const Intro = ({ isActive }) => {
    const openUrl = (url_for) => {
        playStaplerClick();
        setTimeout(() => {
            window.open(urls[url_for], '_blank');
        }, 150);
    };

    const darkMode = useSelector((state) => state.navstate.darkMode);
    const loading = useSelector((state) => state.navstate.loading);
    const navState = useSelector((state) => state.navstate.data);
    const dispatch = useDispatch();

    const [resumeWiggle, setResumeWiggle] = useState(false);
    
    const handleResumeClick = () => {
        setResumeWiggle(true);
        playStaplerClick();
        setTimeout(() => {
            setResumeWiggle(false);
            window.open('https://drive.google.com/file/d/1ahUVkN2IhroDbCRon6qqV_rmIgUDvgKL/view?usp=sharing', '_blank');
        }, 300);
    };

    useEffect(() => {
        switchViewHandler('intro', navState, dispatch);
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 800);
    }, []);

    if (!isActive) return null;

    const skills = [
        "React", "Vue", "Redux", "TypeScript", "JavaScript", "Node.js", 
        "Express.js", "Python", "Ruby", "HTML5", "CSS3", "SASS", 
        "TailwindCSS", "Next.js", "Git", "GitHub", "Figma", "Postman"
    ];

    return (
        <>
            <Loader loading={loading} />
            {!loading && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    
                    {/* Header Intro Card */}
                    <div className="terminalWindow" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                            <div>
                                <Reveal>
                                    <h2 style={{ margin: 0, fontSize: '2.1rem', fontWeight: 'bold' }}>
                                        Shubham Kumar
                                    </h2>
                                </Reveal>
                                <Reveal>
                                    <div style={{ fontSize: '1rem', fontWeight: '500', color: darkMode ? 'var(--muted-dark)' : 'var(--muted-light)', marginTop: '4px' }}>
                                        <TypeAnimation
                                            sequence={[
                                                "Sr. Software Engineer @ Paytm",
                                                1500,
                                                "Building high-performance UI/UX systems",
                                                1500,
                                                "Contributing to Open Source",
                                                1500
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            repeat={Infinity}
                                        />
                                    </div>
                                </Reveal>
                                <Reveal>
                                    <div style={{ display: 'flex', gap: '12px', marginTop: '14px' }}>
                                        <Github style={{ cursor: 'pointer', width: '20px', height: '20px', fill: darkMode ? '#8b949e' : '#57606a', transition: 'transform 0.2s' }} onClick={() => openUrl('github')} className="socialLink" />
                                        <LinkedIn style={{ cursor: 'pointer', width: '20px', height: '20px', fill: darkMode ? '#8b949e' : '#57606a', transition: 'transform 0.2s' }} onClick={() => openUrl('linkedin')} className="socialLink" />
                                        <Twitter_X style={{ cursor: 'pointer', width: '18px', height: '18px', fill: darkMode ? '#8b949e' : '#57606a', transition: 'transform 0.2s' }} onClick={() => openUrl('twitter_x')} className="socialLink" />
                                        <Insta style={{ cursor: 'pointer', width: '20px', height: '20px', fill: darkMode ? '#8b949e' : '#57606a', transition: 'transform 0.2s' }} onClick={() => openUrl('insta')} className="socialLink" />
                                        <Youtube style={{ cursor: 'pointer', width: '20px', height: '20px', fill: darkMode ? '#8b949e' : '#57606a', transition: 'transform 0.2s' }} onClick={() => openUrl('youtube')} className="socialLink" />
                                    </div>
                                </Reveal>
                            </div>

                            {/* Resume button */}
                            <motion.button 
                                onClick={handleResumeClick}
                                className="deskSticker"
                                style={{
                                    border: '1.5px solid var(--border-light)',
                                    background: darkMode ? '#21262d' : '#f6f8fa',
                                    color: darkMode ? '#c9d1d9' : '#24292f',
                                    padding: '8px 16px',
                                    borderRadius: '6px'
                                }}
                                animate={resumeWiggle ? { scale: [1, 1.05, 0.95, 1] } : {}}
                            >
                                📄 Open Resume.pdf
                            </motion.button>
                        </div>
                    </div>

                    {/* Biography & Stack */}
                    <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '25px' }}>
                        {/* Bio card */}
                        <div className="terminalWindow" style={{ padding: '20px' }}>
                            <h3 style={{ margin: '0 0 12px 0', fontSize: '1.2rem', color: darkMode ? '#fff' : '#24292f' }}>
                                system_info.log
                            </h3>
                            <div style={{ fontSize: '0.88rem', lineHeight: '1.6', color: darkMode ? '#c9d1d9' : '#24292f' }}>
                                <p style={{ margin: '0 0 10px 0' }}>
                                    I am a **Software Engineer** specializing in frontend architecture and developer workflows. Currently, I work in the frontend engineering team at **Paytm**, building user-friendly payment frameworks.
                                </p>
                                <p style={{ margin: 0 }}>
                                    I lay robust API pipelines, design customized CRM SaaS integrations, and create high-legibility interfaces. I laid my computer science foundations at Shaheed Sukhdev College of Business Studies, University of Delhi.
                                </p>
                            </div>
                        </div>

                        {/* Stack card */}
                        <div className="terminalWindow" style={{ padding: '20px' }}>
                            <h3 style={{ margin: '0 0 12px 0', fontSize: '1.2rem', color: darkMode ? '#fff' : '#24292f' }}>
                                stack_modules
                            </h3>
                            <div className="techBadgesGrid">
                                {skills.map((skill) => (
                                    <div key={skill} className="techBadge">{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* YouTube & Instagram Integrations */}
                    <div className="terminalWindow" style={{ padding: '24px' }}>
                        <h3 style={{ margin: '0 0 15px 0', fontSize: '1.3rem', color: darkMode ? '#fff' : '#24292f' }}>
                            Showcase Telemetry
                        </h3>

                        {/* YouTube Section (styled like Zapier triggers) */}
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{ fontSize: '0.95rem', color: '#ff0000', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                📺 youtube_stream_trigger
                            </h4>
                            <div className="youtubeFeedGrid">
                                <a 
                                    href="https://www.youtube.com/@LetsCodeWithSam" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="ytIntegrationCard"
                                    onClick={() => playStaplerClick()}
                                >
                                    <div className="ytLogoBox" style={{ background: '#ff0000' }}>
                                        YOUTUBE
                                    </div>
                                    <div>
                                        <div className="ytTitle">React Drag & Drop SaaS Flow Builder 🛠️</div>
                                        <div className="ytDesc" style={{ fontSize: '0.75rem' }}>Step-by-step masterclass building node-based conversational SaaS flow diagrams.</div>
                                    </div>
                                </a>

                                <a 
                                    href="https://www.youtube.com/@LetsCodeWithSam" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="ytIntegrationCard"
                                    onClick={() => playStaplerClick()}
                                >
                                    <div className="ytLogoBox" style={{ background: '#ff4d4d' }}>
                                        INTEGRATE
                                    </div>
                                    <div>
                                        <div className="ytTitle">Dual Payments (Stripe + PayU) 💳</div>
                                        <div className="ytDesc" style={{ fontSize: '0.75rem' }}>Pipelining domestic and international payment gateways in React apps.</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Instagram Feed Section (styled like PostHog diagnostics) */}
                        <div>
                            <h4 style={{ fontSize: '0.95rem', color: '#e1306c', margin: '0 0 12px 0' }}>
                                📸 instagram_telemetry_logs
                            </h4>
                            <div className="instagramFeedGrid">
                                <a 
                                    href="https://www.instagram.com/function.shubham/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="instaTelemetryCard"
                                    onClick={() => playTapeTear()}
                                >
                                    <img src={imgMe} className="instaImg" style={{ borderRadius: '4px' }} alt="Paytm Milestone" />
                                    <div style={{ padding: '8px 0 0 0' }}>
                                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.8rem' }}>Paytm SSE milestone unlocked</p>
                                        <div className="instaMeta" style={{ marginTop: '4px' }}>
                                            <span>❤️ 342</span>
                                            <span>📅 Sept 2025</span>
                                        </div>
                                    </div>
                                </a>

                                <a 
                                    href="https://www.instagram.com/function.shubham/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="instaTelemetryCard"
                                    onClick={() => playTapeTear()}
                                >
                                    <img src={imgAQI} className="instaImg" style={{ borderRadius: '4px' }} alt="Figma Snaps" />
                                    <div style={{ padding: '8px 0 0 0' }}>
                                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.8rem' }}>Figma AQI telemetry design</p>
                                        <div className="instaMeta" style={{ marginTop: '4px' }}>
                                            <span>❤️ 98</span>
                                            <span>📅 design_log</span>
                                        </div>
                                    </div>
                                </a>

                                <a 
                                    href="https://www.instagram.com/function.shubham/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="instaTelemetryCard"
                                    onClick={() => playTapeTear()}
                                >
                                    <div style={{ width: '100%', height: '135px', background: darkMode ? '#21262d' : '#f6f8fa', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)', borderRadius: '4px' }}>
                                        <span className="monospace" style={{ fontSize: '0.72rem', color: darkMode ? '#8be9fd' : '#0969da' }}>early_coffee.log</span>
                                    </div>
                                    <div style={{ padding: '8px 0 0 0' }}>
                                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.8rem' }}>Early morning debugging code</p>
                                        <div className="instaMeta" style={{ marginTop: '4px' }}>
                                            <span>❤️ 142</span>
                                            <span>📅 console.log</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            )}
        </>
    );
};

export default Intro;