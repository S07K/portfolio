import React, { useEffect } from "react";
import styles from '../../css/projects.module.css'
import Card from "./Card";
import techroneImg from "../../assets/images/techrone-app.png"
import royalEatsImg from "../../assets/images/royal eats.png"
import healthyfyMeImg from "../../assets/images/Healthy Me.jpeg"
import chhatramateImg from "../../assets/images/chhatramate.png"
import oldPorfolio from "../../assets/images/oldPortfolio.png"
import biout from "../../assets/images/biout.png"
import {ReactComponent as Github} from '../../assets/images/github.svg'
import { switchViewHandler } from '../NavigationHandler';
import { useSelector, useDispatch } from 'react-redux';
import Reveal from '../Reveal'

const ProjectList = [
    {
        id: '0',
        img: oldPorfolio,
        name: 'Old Portfolio',
        url: 'https://s07k.github.io/s7k',
        description: 'Old portfolio website which I made in college while learning the web dev skills',
        techStack: ''
    },
    {
        id: '1',
        img: biout,
        name: 'Bhangra It Out',
        url: 'https://s07k.github.io/Bhangra-it-out/',
        description: 'This Project was undertaken while working as a frontend web developer at Teach For India',
        techStack: ''
    },
    {
        id: '2',
        img: techroneImg,
        name: 'Techrone App',
        url: 'https://main--jovial-panini-51602d.netlify.app/',
        description: 'Tried to build a React app. A Drone E-commerce App landing page. Its only a wireframe sign up or login pages are static',
        techStack: ''
    },
    {
        id: '3',
        img: royalEatsImg,
        name: 'Royal Eats',
        url: 'https://s07k.github.io/Royal-Eats/',
        description: 'A Royal Eats Project, webpage for a fake restaurant, this is a project which me and my friend built in collaboration for a competition, used purely HTML and CSS',
        techStack: ''
    },
    {
        id: '4',
        img: healthyfyMeImg,
        name: 'Healthy Me!',
        url: 'https://s07k.github.io/Healthy-Me/',
        description: 'This is a project undertaken for a student-run virtual event (HACK THE SOLUTION) consisting of a 36-hour hackathon with mentorship from experts and fun challenges.',
        techStack: ''
    },
    {
        id: '5',
        img: chhatramateImg,
        name: 'CHHATRAMATE',
        url: 'https://www.figma.com/proto/uMmE2f1Us1kTAS7OGfjKS9/CHHATRAMATE?node-id=15%3A34&starting-point-node-id=15%3A34',
        description: 'Tried to Design UI/UX for a fake solo brainstormed app. This App is a tool to take notes of anything.',
        techStack: ''
    },
]

const ProjectCards = ProjectList.map((project) => {
    return <Reveal><Card key={project.id} data={project}/></Reveal>
})

const Projects = ({ isActive }) => {
    const openAllRepos = () => {
        window.open('https://github.com/S07K?tab=repositories', '_blank')
    }

    const darkMode = useSelector((state) => state.navstate.darkMode)
    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
        switchViewHandler('projects', navState, dispatch)
    }, [])

    return (isActive ? <div className={`${darkMode ? styles.darkMode : ''} ${styles.projects}`}>
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