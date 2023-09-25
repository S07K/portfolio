import React from "react"
import style from "../../css/details.module.css"
import Reveal from "../Reveal"

const content_2023 = <div>
    {/* <h1 className={style.expTitle}>Got promoted</h1> */}
    <div className={style.details}>
        <Reveal>
            <h3 className={style.expCompany}>EnableX</h3>
        </Reveal>
        <Reveal>
            <p className={style.expDesignation}>Software Engineer</p>
        </Reveal>
        <Reveal>
            <p className={style.expDuration}>July 5<sup>th</sup> - present</p>
        </Reveal>
        <p>
            <Reveal>
                <b>Skills:</b> Zoho <b>·</b> Zoho Extension <b>·</b> UI development <b>·</b> Design <b>·</b> User Experience Design (UED) <b>·</b> User Experience (UX) <b>·</b> User Interface Design <b>·</b> Git <b>·</b> jQuery
            </Reveal>
            <br></br>
            <br></br>
            <Reveal>
                <b>Description:</b> In my current capacity, I have independently developed a ZOHO Extension by seamlessly integrating the company's messaging API services. This project underscores my self-reliant and autonomous approach to project execution, as I took sole responsibility for its development without the involvement of any other team members. Furthermore, I presently serve as a valued member of the React development team, contributing to the collective effort and success of our projects.
            </Reveal>
        </p>
    </div>
</div>

const content_2022 = <div>
    <div>
        {/* <h1 className={style.expTitle}>Started Corporate life</h1> */}
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>EnableX</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Engineer Trainee</p></Reveal>
            <Reveal><p className={style.expDuration}>July 4<sup>th</sup> 2022 - July 4<sup>th</sup> 2023</p></Reveal>
            <p>
                <Reveal><b>Skills:</b> UI development <b><b>·</b></b> Design <b>·</b> User Experience Design (UED) <b>·</b> User Experience (UX) <b>·</b> User Interface Design <b>·</b> Git <b>·</b> Web Services API <b>·</b> SASS <b>·</b> HTML5 <b>·</b> Cascading Style Sheets (CSS) <b>·</b> Bootstrap <b>·</b> JavaScript <b>·</b> jQuery</Reveal>
                <br></br>
                <br></br>
                <Reveal><b>Description:</b> Within my role, I am proficient in JavaScript for managing the UI in accordance with API responses. Moreover, I play a key role in the software's development by implementing new features and enhancing its functionality. Additionally, I take full ownership of the integrated features, ensuring their successful integration and optimal performance.</Reveal>
            </p>
        </div>
    </div>
    <br></br>
    {/* <div>
        <h1 className={style.expTitle}>Graduated</h1>
        <div className={style.details}>
            <h3 className={style.expCompany}>University of Delhi</h3>
            <p className={style.expDesignation}>B.Sc. (Hons) Computer Science</p>
            <p className={style.expDuration}>July 4<sup>th</sup> 2022 - July 4<sup>th</sup> 2023</p>
        </div>
    </div> */}
</div>

const content_2021 = <div>
    {/* <h1 className={style.expTitle}>Got promoted</h1> */}
    <div>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Teach For India</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Frontend Web Developer <b>·</b> Internship</p></Reveal>
            <Reveal><p className={style.expDuration}>May 2021 - June 2021</p></Reveal>
            <p>
                <Reveal><b>Skills:</b> Design <b>·</b> User Experience Design (UED) <b>·</b> User Experience (UX) <b>·</b> User Interface Design <b>·</b> Git <b>·</b> Web Design</Reveal>
            </p>
        </div>
    </div>
    <div>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>GirlScript Winter of Contributing</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Contributor</p></Reveal>
            <Reveal><p className={style.expDuration}>Sep 2021 - Nov 2021</p></Reveal>
            <p>
                <Reveal><b>Skills:</b> Git</Reveal>
                <br></br>
                <br></br>
                <Reveal><b>Description:</b> Created visually appealing website loaders that offer effortless integration across various applications.</Reveal>
            </p>
        </div>
    </div>
</div>
const content_2020 = <div>
    <div>
        {/* <h1 className={style.expTitle}>Got promoted</h1> */}
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Started learning Web development</h3></Reveal>
            <Reveal><p className={style.expDesignation}></p></Reveal>
            <Reveal><p className={style.expDuration}>got certified</p></Reveal>
            <p>
                <Reveal><b>Skills:</b> HTML <b>·</b> CSS <b>·</b> JavaScript</Reveal>
            </p>
        </div>
    </div>
</div>
const content_2019 = <div>
    <div>
        {/* <h1 className={style.expTitle}>Got promoted</h1> */}
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Graduated From High School</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Science Student</p></Reveal>
            <p>
                <Reveal><b>Subjects:</b> Physics <b>·</b> Chemistry <b>·</b> Mathematics <b>·</b> English <b>·</b> Computer Science</Reveal>
            </p>
        </div>
    </div>
</div>

const Details = ({ year }) => {
    switch (year) {
        case '2023': return content_2023
        case '2022': return content_2022
        case '2021': return content_2021
        case '2020': return content_2020
        case '2019': return content_2019
        default: return content_2023
    }
}

export default Details