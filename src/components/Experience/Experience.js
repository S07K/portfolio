import React, { useState, useEffect } from "react";
import styles from '../../css/experience.module.css';
import Details from "./Details";
import { switchViewHandler } from '../NavigationHandler';
import { useSelector, useDispatch } from 'react-redux';
import Reveal from "../Reveal";
import { playStaplerClick } from "../SoundManager";
import '../../css/developerTheme.css';

const Experience = () => {
    const [year, change] = useState('2023');

    const toggleYear = (yr) => {
        change(yr);
        playStaplerClick();
    };
    
    const darkMode = useSelector((state) => state.navstate.darkMode);
    const navState = useSelector((state) => state.navstate.data);
    const dispatch = useDispatch();
    
    useEffect(() => {
        switchViewHandler('exp', navState, dispatch);
    }, []);

    const milestones = [
        { year: '2023', label: 'commit SSE-Paytm-2025' },
        { year: '2022', label: 'commit ET-EnableX-2022' },
        { year: '2021', label: 'commit Contributor-GirlScript-2021' },
        { year: '2020', label: 'commit Learning-WebDev-2020' },
        { year: '2019', label: 'commit SSCBS-DU-College-2019' }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '20px' }}>
            <Reveal type="horizontal">
                <h1 className="pageTitle">Experience</h1>
            </Reveal>

            {/* Split layout: Git tree on left, details on right */}
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', gap: '30px', flex: 1, alignItems: 'flex-start' }} className="timeline_grid">
                
                {/* Git branch commit nodes */}
                <div className="terminalWindow" style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '1rem', color: darkMode ? '#fff' : '#24292f' }}>
                        git log --oneline
                    </h3>
                    <div className="gitCommitTree">
                        <div className="gitBranchColumn">
                            <div className="gitBranchLine" />
                            <div className="gitCommitNodes">
                                {milestones.map((milestone) => {
                                    const isActive = year === milestone.year;
                                    return (
                                        <div 
                                            key={milestone.year}
                                            onClick={() => toggleYear(milestone.year)}
                                            className={`gitCommitNode ${isActive ? 'gitCommitNodeActive' : ''}`}
                                            title={`Select ${milestone.year}`}
                                        >
                                            <div className="gitCommitNodeLabel">
                                                {milestone.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selected Job Description details card */}
                <Details year={year} />

            </div>
        </div>
    );
};

export default Experience;