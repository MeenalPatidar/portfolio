import React from 'react';
import styles from './ProjectsStyles.module.css';
import CLIR from '../../assets/clir.png';
import RapidHive from '../../assets/rapidhive.png';
import Travello from '../../assets/travello.png';
import Nback from '../../assets/nback.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle"> Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={CLIR} 
            link="https://github.com/MeenalPatidar/CLIR" 
            h3="CLIR"
            p="Cross Language Information Retrieval"
            />
            <ProjectCard 
            src={RapidHive} 
            link="https://github.com/MeenalPatidar/File_Transfer_System" 
            h3="RapidHive"
            p="File Transfer System"
            />
            <ProjectCard 
            src={Nback} 
            link="https://github.com/MeenalPatidar/N-Back" 
            h3="BraiN-Back"
            p="Audio-Visual N-Back Tests"
            />
            <ProjectCard 
            src={Travello} 
            link="https://github.com/MeenalPatidar/Travello_django" 
            h3="Travello"
            p="Travel Booking and Planning"
            />
        </div>
    </section>
    
  );
}

export default Projects