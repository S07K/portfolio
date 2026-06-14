import React, { useState } from "react";
import Skeleton from 'react-loading-skeleton';
import { useSelector } from "react-redux";
import { playTapeTear } from "../SoundManager";
import '../../css/developerTheme.css';

const Card = ({ id, data }) => {
    const { img, name, url, description, techStack } = data;
    const [skeletonVisible, toggleSkeleton] = useState(true);
    const darkMode = useSelector((state) => state.navstate.darkMode);

    const delay = () => {
        setTimeout(() => {
            toggleSkeleton(false);
        }, 800);
    };

    const handleHover = () => {
        playTapeTear();
    };

    // Mock star and fork count values to look like an active GitHub repository
    const getMockStats = (projName) => {
        switch (projName) {
            case 'PostProAI': return { stars: 42, forks: 8, lang: 'TypeScript', langColor: '#3178c6' };
            case 'Task Tracker': return { stars: 18, forks: 2, lang: 'TypeScript', langColor: '#3178c6' };
            case 'AQI monitoring App': return { stars: 12, forks: 1, lang: 'Design', langColor: '#e34c26' };
            case 'Techrone App': return { stars: 6, forks: 0, lang: 'React', langColor: '#61dafb' };
            case 'Old Portfolio': return { stars: 15, forks: 3, lang: 'JavaScript', langColor: '#f1e05a' };
            case 'Bhangra It Out': return { stars: 8, forks: 1, lang: 'HTML', langColor: '#e34c26' };
            case 'CHHATRAMATE': return { stars: 4, forks: 0, lang: 'Design', langColor: '#f1e05a' };
            case 'Prana Air': return { stars: 9, forks: 2, lang: 'Design', langColor: '#e34c26' };
            default: return { stars: 5, forks: 0, lang: 'JavaScript', langColor: '#f1e05a' };
        }
    };

    const stats = getMockStats(name);

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="repoCard"
            onMouseEnter={handleHover}
        >
            <div className="repoHeader">
                <div className="repoName">
                    {/* Repo Folder Icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 2A1.75 1.75 0 0 0 0 3.75v8.5C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0 0 16 12.25v-6.5A1.75 1.75 0 0 0 14.25 4H7.58L6.02 2.44A1.75 1.75 0 0 0 4.78 2H1.75z" />
                    </svg>
                    <span>{name.toLowerCase().replace(' ', '-')}</span>
                </div>
                <span className="repoBadge">Public</span>
            </div>

            <p className="repoDesc">{description}</p>

            {/* Thumbnail display */}
            <div style={{ width: '100%', height: '110px', overflow: 'hidden', borderRadius: '4px', border: '1px solid var(--border-light)', marginBottom: '12px' }}>
                {skeletonVisible ? (
                    <>
                        <Skeleton width="100%" height="110px" />
                        <img style={{ display: 'none' }} src={img} onLoad={delay} alt={name} />
                    </>
                ) : (
                    <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={name} />
                )}
            </div>

            <div className="repoFooter">
                <div>
                    <span className="langDot" style={{ background: stats.langColor }}></span>
                    <span>{stats.lang}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <span>★</span>
                    <span>{stats.stars}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {/* Fork icon */}
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                        <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v.878a2.25 2.25 0 101.5 0v-2.128A2.25 2.25 0 007.25 5h-1.5v-.628zM8.5 7.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span>{stats.forks}</span>
                </div>
            </div>
        </a>
    );
};

export default Card;