import react from 'react'
import '../../css/educationTimeline.css'

const TimeLine = () => {
    return (

<div className="timeline">
    <ul>
        <li>
            <div className="right_content">
                <h2>University of Delhi</h2>
                <p>
                    B.Sc. (Hons.) Computer Science
                </p>
            </div>
            <div className="left_content">
                <h3>May 2022 </h3>
            </div>
        </li>
        <li>
            <div className="right_content">
                <h2>Bal Bhavan Public School</h2>
                <p>
                    Physics <b>·</b> Chemistry <b>·</b> Maths <b>·</b> Computer Science
                </p>
            </div>
            <div className="left_content">
                <h3>May 2019 </h3>
            </div>
        </li>
        <div style={{clear: 'both'}}></div>
  </ul>
</div>
    )
}

export default TimeLine