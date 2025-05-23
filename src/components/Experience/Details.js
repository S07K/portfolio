import React from "react"
import style from "../../css/details.module.css"
import Reveal from "../Reveal"
import { useSelector } from "react-redux"

const content_2023 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal>
                <h3 className={style.expCompany}>EnableX</h3>
            </Reveal>
            <Reveal>
                <p className={style.expDesignation}>Software Engineer</p>
            </Reveal>
            <Reveal>
                <p className={style.expDuration}>July 5<sup>th</sup> 2023 - present</p>
            </Reveal>
            <div className={style.expBrief}>
                <Reveal>
                    <b>Skills:</b> Third-party API Integrations <b>·</b> CRM Integrations <b>·</b> UI development <b>·</b> UI/UX Design <b>·</b> Git <b>·</b> TailwindCSS <b>·</b> Blueprint JS <b>·</b> React <b>·</b> Redux <b>·</b> TypeScript <b>·</b> NodeJs <b>·</b> ExpressJs <b>·</b> NPM
                </Reveal>
                <br></br>
                <b>Description:</b> 
                <ul>
                <Reveal>
                    <li>
                        <b>Frontend Lead (Chatbot Builder SaaS Project): </b> 
                        Led front-end development, ensuring a user-centric interface and effective design for the Chatbot Builder SaaS project, enhancing usability by 40%.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Payment Gateway Integration: </b> 
                        Integrated PayU for Indian customers and Stripe for international transactions into the chatbot platform, enabling seamless in-bot payments. This feature helps businesses scale 40-70% faster.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Integration in Chatbot Flow Builder: </b> 
                        Integrated third-party system APIs, enabling seamless data push to CRM systems like ZOHO, Salesforce, Zendesk, and HubSpot, covering 80% of the market.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Calendly Integration: </b> 
                        Implemented Calendly integration, allowing users to schedule meetings directly through the chatbot, streamlining the booking process and improving user experience.
                    </li>
                </Reveal>
                <Reveal>
                    <li>
                        <b>Optimized User Flow for React Project: </b> 
                        Enhanced user flow by addressing key challenges and implementing strategic improvements, resulting in a 35% increase in overall usability and user satisfaction.
                    </li>
                </Reveal>
                </ul>
            </div>
        </div>
    </div>
</div>

const content_2022 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>EnableX</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Engineer Trainee</p></Reveal>
            <Reveal><p className={style.expDuration}>July 4<sup>th</sup> 2022 - July 4<sup>th</sup> 2023</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Skills:</b> UI development <b>·</b> UI/UX Design <b>·</b> Git <b>·</b> Web Services API <b>·</b> HTML5 <b>·</b> CSS3 <b>·</b> SASS <b>·</b> Bootstrap <b>·</b> JavaScript <b>·</b> jQuery <b>·</b> Ruby <b>·</b> WebRTC <b>·</b> Video APIs</Reveal>
                <br></br>
                <b>Description:</b>
                <ul>
                    <Reveal>
                        <li>
                            <b>Proficient JavaScript Developer: </b>
                            Possess rich experience in JavaScript, leveraging its capabilities to create exceptional web applications. Revamped
                            user interfaces by leveraging JavaScript's capabilities, resulting in streamlined workflows and improved user satisfaction.
                        </li>
                    </Reveal>
                    <Reveal>
                        <li>
                            <b>UX Enhancement Specialist: </b>
                            Established expertise in optimizing user satisfaction through strategic UX improvements, resulting in a remarkable 80%
                            increase in user engagement. Led feature development initiatives within SaaS products, ensuring a user-centric approach and enhancing overall user
                            experience.
                        </li>
                    </Reveal>
                    <Reveal>
                        <li>
                            <b>API Integration Expert: </b>
                            Showcased proficiency as an API integration expert, seamlessly incorporating third-party APIs to achieve responsive UI and
                            real-time data functionalities.
                        </li>
                    </Reveal>
                    <Reveal>
                        <li>
                            <b>Ruby Application Server Developer: </b>
                            Successfully built the 1st Ruby application server within a challenging two-day timeframe. Showcased versatility
                            and rapid acquisition of skills by becoming robust in a previously unfamiliar programming language for efficient server-side development.
                        </li>
                    </Reveal>
                </ul>
            </div>
        </div>
    </div>
</div>

const content_2021 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Teach For India</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Frontend Web Developer <b>·</b> Internship</p></Reveal>
            <Reveal><p className={style.expDuration}>May 2021 - June 2021</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Skills:</b> Design <b>·</b> User Experience Design (UXD) <b>·</b> User Interface Design(UID) <b>·</b> Git <b>·</b> Web Design <b>·</b> HTML5 <b>·</b> CSS3</Reveal>
                <br></br>
                <Reveal>
                    <b>Description:</b>
                    <ul>
                        <Reveal>
                            <li>
                                <b>Web Interface Development: </b>
                                Designed and constructed a user-friendly web interface for a high-impact campaign, emphasizing both visual appeal and
                                functional efficiency. Ensured the online presence aligned with campaign objectives, providing an engaging and effortless experience for users.
                            </li>
                        </Reveal>
                        <Reveal>
                            <li>
                                <b>Design Layout Proficiency: </b>
                                Acquired valuable expertise in crafting effective design layouts for webpages, enhancing the visual appeal and overall user
                                experience of online content. Demonstrated a keen eye for design principles, contributing to the creation of visually compelling and intuitive web
                                layouts.
                            </li>
                        </Reveal>
                    </ul>
                </Reveal>
            </div>
        </div>
    </div>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>GirlScript Winter of Contributing</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Contributor</p></Reveal>
            <Reveal><p className={style.expDuration}>Sep 2021 - Nov 2021</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Skills:</b> Git</Reveal>
                <br></br>
                <Reveal>
                    <b>Description:</b>
                    <ul>
                        <li>
                            <b>Open-Source Involvement: </b>
                            Contributed actively to open-source projects, gaining valuable experience in collaborative software development.
                            Represented a commitment to community engagement, participating in the broader development community and contributing to the advancement of
                            shared knowledge and resources.
                        </li>
                    </ul>
                </Reveal>
            </div>
        </div>
    </div>
</div>

const content_2020 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Started learning Web development</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Got Certifications</p></Reveal>
            <Reveal><p className={style.expDuration}></p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Skills:</b> HTML <b>·</b> CSS <b>·</b> JavaScript</Reveal>
            </div>
        </div>
    </div>
</div>

const content_2019 = <div className={style.expWrapper}>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Graduated From High School</h3></Reveal>
            <Reveal><p className={style.expDesignation}>Science Student</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>Subjects:</b> Physics <b>·</b> Chemistry <b>·</b> Mathematics <b>·</b> English <b>·</b> Computer Science</Reveal>
            </div>
        </div>
    </div>
    <div className={style.detailsWrapper}>
        <div className={style.details}>
            <Reveal><h3 className={style.expCompany}>Got into College</h3></Reveal>
            <Reveal><p className={style.expDesignation}>B.Sc. (Hons.) Computer Science</p></Reveal>
            <Reveal><p className={style.expDuration}>Shaheed Sukhdev College of Business Studies</p></Reveal>
            <div className={style.expBrief}>
                <Reveal><b>University of Delhi</b></Reveal>
            </div>
        </div>
    </div>
</div>

const Details = ({ year }) => {
    const darkMode = useSelector((state) => state.navstate.darkMode)
    switch (year) {
        case '2023': return <div className={darkMode ? style.darkMode : ''}>{content_2023}</div>
        case '2022': return <div className={darkMode ? style.darkMode : ''}>{content_2022}</div>
        case '2021': return <div className={darkMode ? style.darkMode : ''}>{content_2021}</div>
        case '2020': return <div className={darkMode ? style.darkMode : ''}>{content_2020}</div>
        case '2019': return <div className={darkMode ? style.darkMode : ''}>{content_2019}</div>
        default: return content_2023
    }
}

export default Details