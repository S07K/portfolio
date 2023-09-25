import react from 'react'
import '../../css/educationTimeline.css'
import Reveal from '../Reveal'

const TimeLine = () => {
    return (

        <div className="timeline">
            <ul>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>University of Delhi</h2>
                            <p>
                                B.Sc. (Hons.) Computer Science
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>May 2022 </h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>FreeCodeCamp</h2>
                            <p>
                                <a href='https://www.freecodecamp.org/certification/s07k/front-end-development-libraries' target='_blank'>Front End Libraries</a> <b>·</b> Certification
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>Jul 20, 2021 </h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>Sololearn</h2>
                            <p>
                                <a href='https://www.sololearn.com/Certificate/CT-XFZHP2I7/png' target='_blank'>JavaScript</a> <b>·</b> Certification
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>Mar 16, 2021 </h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>FreeCodeCamp</h2>
                            <p>
                                <a href='https://www.freecodecamp.org/certification/s07k/responsive-web-design' target='_blank'>Responsive Web Design</a> <b>·</b> Certification
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>Jan 29, 2021 </h3>
                    </div>
                </li>
                <li>
                    <Reveal>
                        <div className="right_content">
                            <h2>Bal Bhavan Public School</h2>
                            <p>
                                Physics <b>·</b> Chemistry <b>·</b> Maths <b>·</b> Computer Science
                            </p>
                        </div>
                    </Reveal>
                    <div className="left_content">
                        <h3>May 2019 </h3>
                    </div>
                </li>
                <div style={{ clear: 'both' }}></div>
            </ul>
        </div>
    )
}

export default TimeLine