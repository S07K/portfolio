import React, { useEffect } from "react";
import styles from '../../css/projects.module.css'
import Card from "./Card";
import taskTracker from "../../assets/images/taskTracker.png"
import techroneImg from "../../assets/images/techrone-app.png"
// import royalEatsImg from "../../assets/images/royal eats.png"
// import healthyfyMeImg from "../../assets/images/Healthy Me.jpeg"
import chhatramateImg from "../../assets/images/chhatramate.png"
import pranaAir from "../../assets/images/pranaAir.png"
import AQIApp from "../../assets/images/AQIApp.png"
import oldPorfolio from "../../assets/images/oldPortfolio.png"
import biout from "../../assets/images/biout.png"
import {ReactComponent as Github} from '../../assets/images/github.svg'
import { switchViewHandler } from '../NavigationHandler';
import { useSelector, useDispatch } from 'react-redux';
import Reveal from '../Reveal'
import { nanoid } from "nanoid";

const ProjectList = [
    {
        img: taskTracker,
        name: 'Task Tracker',
        url: 'https://task-tracker-frontend-eta.vercel.app/',
        description: 'Task Tracker: A web app to manage and track daily, weekly, and monthly tasks. Features include email verification, user authentication, and CRUD operations. Deployed on Vercel and MongoDB Atlas.',
        techStack: ''
    },
    {
        img: AQIApp,
        name: 'AQI monitoring App',
        url: 'https://www.figma.com/proto/PK0b1v1DUNTflTSoJEAmyC/AQI-2?type=design&node-id=8-164&t=OAtnCQ3pVnE1n7pa-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A164&show-proto-sidebar=1&mode=design',
        description: 'A website design for a company while working as a freelancer. This is a landing page for a startup which monitors the AQI through their product being installed in various regions.',
        techStack: ''
    },
    {
        img: techroneImg,
        name: 'Techrone App',
        url: 'https://main--jovial-panini-51602d.netlify.app/',
        description: 'Tried to build a React app. A Drone E-commerce App landing page. Its only a wireframe sign up or login pages are static',
        techStack: ''
    },
    {
        img: oldPorfolio,
        name: 'Old Portfolio',
        url: 'https://s07k.github.io/s7k',
        description: 'Old portfolio website which I made in college while learning the web dev skills',
        techStack: ''
    },
    {
        img: biout,
        name: 'Bhangra It Out',
        url: 'https://s07k.github.io/Bhangra-it-out/',
        description: 'This Project was undertaken while working as a frontend web developer at Teach For India',
        techStack: ''
    },
    // {
    //     img: royalEatsImg,
    //     name: 'Royal Eats',
    //     url: 'https://s07k.github.io/Royal-Eats/',
    //     description: 'A Royal Eats Project, webpage for a fake restaurant, this is a project which me and my friend built in collaboration for a competition, used purely HTML and CSS',
    //     techStack: ''
    // },
    // {
    //     img: healthyfyMeImg,
    //     name: 'Healthy Me!',
    //     url: 'https://s07k.github.io/Healthy-Me/',
    //     description: 'This is a project undertaken for a student-run virtual event (HACK THE SOLUTION) consisting of a 36-hour hackathon with mentorship from experts and fun challenges.',
    //     techStack: ''
    // },
    {
        img: chhatramateImg,
        name: 'CHHATRAMATE',
        url: 'https://www.figma.com/proto/uMmE2f1Us1kTAS7OGfjKS9/CHHATRAMATE?node-id=15%3A34&starting-point-node-id=15%3A34',
        description: 'Tried to Design UI/UX for a fake solo brainstormed app. This App is a tool to take notes of anything.',
        techStack: ''
    },
    {
        img: pranaAir,
        name: 'Prana Air',
        url: 'https://www.figma.com/proto/bIwpFb3uN2vRP7wnk3o8da/Prana-Air?type=design&t=yEMv9RTWfKuOaC7y-1&scaling=contain&page-id=0%3A1&starting-point-node-id=15%3A264&node-id=15-264&mode=design',
        description: 'A website design for a company while working as a freelancer. This is a landing page for a product based startup.',
        techStack: ''
    },
]

const ProjectCards = ProjectList.map((project) => {
    const uniqueId = nanoid(10)
    return <Reveal><Card key={uniqueId} data={project}/></Reveal>
})

const Projects = ({ isActive }) => {
    const openAllRepos = () => {
        window.open('https://github.com/S07K?tab=repositories', '_blank')
    }

    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        switchViewHandler('projects', navState, dispatch)
    }, [])

    return (isActive ? <div className={styles.projects}>
        <div>
            <Reveal type="horizontal">
                <h1>
                    Projects
                </h1>
            </Reveal>
            <br></br>
            <div className={styles.projectsWrapper}>
                {ProjectCards}
            </div>
            <Reveal>
                <div className={styles.btnWrapper} onClick={() => openAllRepos()}>
                    <div className={styles.githubRepoBtnWrapper}>
                        <p>See all projects</p> 
                        <Github />
                    </div>
                </div>
            </Reveal>
        </div>
    </div> : '')
}

export default Projects