import React from "react";
import styles from '../../css/projects.module.css'
import Card from "./Card";
import techroneImg from "../../assets/images/techrone-app.png"
import royalEatsImg from "../../assets/images/royal eats.png"
import healthyfyMeImg from "../../assets/images/Healthy Me.jpeg"
import chhatramateImg from "../../assets/images/chhatramate.png"

const ProjectList = [
    {
        id: '1',
        img: techroneImg,
        name: 'Techrone App',
        url: 'https://main--jovial-panini-51602d.netlify.app/',
        description: 'Tried to build a React app. A Drone E-commerce App landing page.',
        techStack: ''
    },
    {
        id: '2',
        img: royalEatsImg,
        name: 'Royal Eats',
        url: 'https://s07k.github.io/Royal-Eats/',
        description: 'A Royal Eats Project, webpage for a fake restaurant, this is a project which me and my friend built in collaboration for a competition, used purely HTML and CSS',
        techStack: ''
    },
    {
        id: '3',
        img: healthyfyMeImg,
        name: 'Healthy Me!',
        url: 'https://s07k.github.io/Royal-Eats/',
        description: 'This is a project undertaken for a student-run virtual event (HACK THE SOLUTION) consisting of a 36-hour hackathon with mentorship from experts and fun challenges.',
        techStack: ''
    },
    {
        id: '4',
        img: chhatramateImg,
        name: 'CHHATRAMATE',
        url: 'https://www.figma.com/proto/uMmE2f1Us1kTAS7OGfjKS9/CHHATRAMATE?node-id=15%3A34&starting-point-node-id=15%3A34',
        description: 'Tried to Design UI/UX.',
        techStack: ''
    },
]

const ProjectCards = ProjectList.map((project) => {
    return <Card key={project.id} data={project}/>
})

const Projects = ({ isActive }) => {
    return (isActive ? <div className={styles.projects}>
        <div>
            <h1>
                Projects
            </h1>
            <br></br>
            <div className={styles.projectsWrapper}>
                {ProjectCards}
            </div>
        </div>
    </div> : '')
}

export default Projects