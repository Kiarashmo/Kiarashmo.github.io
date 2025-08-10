import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import projects from '../data/projects.json';
import styles from './projects.module.css';

import FadeIn from '../components/FadeIn';

import { FaKaggle } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <Link to={`/projects/${project.id}`}>
        <img src={project.image} alt={project.title} className={styles.cardImage} />
      </Link>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.cardTags}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.cardTag}>{tag}</span>
          ))}
        </div>
        <div className={styles.cardFooter}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardAction}>
            {project.id === 'project-4' ? <FaKaggle /> : <i className="fab fa-github"></i>}
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Layout
      title="My Projects"
      description="Explore a collection of my projects in machine learning, NLP, generative AI and Bioinformatics.">
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Highlighted Projects</h1>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
