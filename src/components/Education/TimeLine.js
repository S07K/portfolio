import React from 'react';
import Reveal from '../Reveal';
import { useSelector } from 'react-redux';
import '../../css/developerTheme.css';

const TimeLine = () => {
    const darkMode = useSelector((state) => state.navstate.darkMode);

    const credentials = [
        {
            type: 'University Degree',
            institution: 'University of Delhi',
            degree: 'B.Sc. (Hons.) Computer Science',
            date: 'May 2022',
            desc: 'Shaheed Sukhdev College of Business Studies, University of Delhi. Covered algorithms, software engineering, databases, and mathematics.',
            link: null
        },
        {
            type: 'Certification',
            institution: 'FreeCodeCamp',
            degree: 'Front End Development Libraries',
            date: 'Jul 20, 2021',
            desc: 'React, Redux, Bootstrap, jQuery, and Sass modules integration.',
            link: 'https://www.freecodecamp.org/certification/s07k/front-end-development-libraries'
        },
        {
            type: 'Certification',
            institution: 'Sololearn',
            degree: 'JavaScript Core Algorithms',
            date: 'Mar 16, 2021',
            desc: 'Advanced algorithms, event handling, ES6 syntax, and object models.',
            link: 'https://www.sololearn.com/Certificate/CT-XFZHP2I7/png'
        },
        {
            type: 'Certification',
            institution: 'FreeCodeCamp',
            degree: 'Responsive Web Design Layouts',
            date: 'Jan 29, 2021',
            desc: 'HTML5 semantic tags, CSS grid layouts, flexing, and responsive viewports.',
            link: 'https://www.freecodecamp.org/certification/s07k/responsive-web-design'
        },
        {
            type: 'High School',
            institution: 'Bal Bhavan Public School',
            degree: 'Science Stream (PCM)',
            date: 'May 2019',
            desc: 'Physics, Chemistry, Mathematics, Computer Science (C++), and English.',
            link: null
        }
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="education_grid">
            {credentials.map((cred, idx) => (
                <Reveal key={idx}>
                    <div className="terminalWindow" style={{ height: '100%' }}>
                        <div className="terminalHeader">
                            <div className="terminalControls">
                                <div className="terminalDot dotRed"></div>
                                <div className="terminalDot dotYellow"></div>
                                <div className="terminalDot dotGreen"></div>
                            </div>
                            <div className="terminalTitle" style={{ fontSize: '0.7rem' }}>{cred.type.toLowerCase().replace(' ', '_')}.log</div>
                        </div>
                        <div className="terminalBody" style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: 'calc(100% - 32px)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '1.05rem', color: darkMode ? '#f1c40f' : 'var(--primary-blue)' }}>{cred.institution}</h3>
                                <span className="kbd" style={{ fontSize: '0.65rem' }}>{cred.date}</span>
                            </div>
                            <p style={{ margin: '4px 0 10px 0', fontSize: '0.85rem', fontWeight: 'bold' }}>{cred.degree}</p>
                            <p style={{ margin: '0 0 14px 0', fontSize: '0.78rem', color: darkMode ? 'var(--muted-dark)' : 'var(--muted-light)', flexGrow: 1 }}>{cred.desc}</p>
                            
                            {cred.link && (
                                <a 
                                    href={cred.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ 
                                        marginTop: 'auto', 
                                        fontSize: '0.75rem', 
                                        color: 'var(--primary-blue)', 
                                        textDecoration: 'underline', 
                                        fontWeight: '600',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}
                                >
                                    Verify Credential ↗
                                </a>
                            )}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    );
};

export default TimeLine;