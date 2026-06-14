import React from "react";
import { useSelector } from "react-redux";
import Reveal from "../Reveal";
import '../../css/developerTheme.css';

const Details = ({ year }) => {
    const darkMode = useSelector((state) => state.navstate.darkMode);

    const getCommitLogs = (yr) => {
        switch (yr) {
            case '2023':
                return {
                    id: 'f87a9e3',
                    company: 'Paytm',
                    role: 'Sr. Software Engineer',
                    duration: 'Sept 2025 - Present',
                    skills: ['Vue', 'Redux', 'JavaScript', 'TailwindCSS'],
                    details: [
                        'Pipelined and scaled core modules in the frontend team of PIBPL.',
                        'Optimized CRM flow pipelines, improving client operations by 40%.',
                        'Integrated domestic and international gateways (Stripe, PayU) inside chat flow builders.'
                    ]
                };
            case '2022':
                return {
                    id: 'c52e411',
                    company: 'EnableX',
                    role: 'Software Engineer Trainee',
                    duration: 'July 2022 - July 2023',
                    skills: ['Ruby', 'JavaScript', 'HTML5', 'CSS3', 'WebRTC'],
                    details: [
                        'Constructed first Ruby application server within two-day timeline.',
                        'Enhanced user workflows, raising product engagement metrics by 80%.',
                        'Delivered real-time WebRTC audio/video dashboard integrations.'
                    ]
                };
            case '2021':
                return {
                    id: 'b712fa9',
                    company: 'Teach For India & GirlScript',
                    role: 'Web Developer / Contributor',
                    duration: 'May 2021 - Nov 2021',
                    skills: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
                    details: [
                        'Designed user-friendly interfaces for campaign dashboards during Teach For India internship.',
                        'Contributed codebase commits during the GirlScript Winter of Contributing program.'
                    ]
                };
            case '2020':
                return {
                    id: 'a90d421',
                    company: 'Self-Directed Learning',
                    role: 'Developer Path',
                    duration: 'Jan 2020 - Dec 2020',
                    skills: ['HTML', 'CSS', 'JavaScript'],
                    details: [
                        'Built core programming foundations and completed basic responsive web design projects.'
                    ]
                };
            case '2019':
                return {
                    id: '9211fb4',
                    company: 'SSCBS, University of Delhi',
                    role: 'B.Sc. (Hons) Computer Science',
                    duration: 'May 2019 - May 2022',
                    skills: ['C++', 'Python', 'Algorithms', 'Databases'],
                    details: [
                        'Acquired academic foundations in database engineering, data structures, and computer architectures.'
                    ]
                };
            default:
                return null;
        }
    };

    const log = getCommitLogs(year);
    if (!log) return null;

    return (
        <div className="terminalWindow" style={{ height: '100%' }}>
            <div className="terminalHeader">
                <div className="terminalControls">
                    <div className="terminalDot dotRed"></div>
                    <div className="terminalDot dotYellow"></div>
                    <div className="terminalDot dotGreen"></div>
                </div>
                <div className="terminalTitle">commit_log.txt</div>
            </div>
            <div className="terminalBody" style={{ color: darkMode ? '#f8f8f2' : '#24292f' }}>
                <Reveal>
                    <div style={{ borderBottom: '1px dashed var(--border-light)', paddingBottom: '10px', marginBottom: '12px' }}>
                        <span style={{ color: '#ff79c6', fontWeight: 'bold' }}>commit {log.id}</span><br />
                        <span style={{ color: '#8be9fd' }}>Author:</span> Shubham Kumar &lt;shubham@paytm.com&gt;<br />
                        <span style={{ color: '#8be9fd' }}>Date:</span> {log.duration}<br />
                        <span style={{ color: '#50fa7b' }}>Role:</span> {log.role} @ {log.company}
                    </div>
                </Reveal>
                
                <Reveal>
                    <div style={{ marginBottom: '12px' }}>
                        <strong>Modules Integrated:</strong><br />
                        <div className="techBadgesGrid" style={{ marginTop: '5px' }}>
                            {log.skills.map((s) => (
                                <span key={s} className="techBadge">{s}</span>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <strong>Diagnostic Output:</strong>
                        <ul style={{ margin: '5px 0 0 0', paddingLeft: '20px', lineHeight: '1.6' }}>
                            {log.details.map((d, index) => (
                                <li key={index}>{d}</li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Details;