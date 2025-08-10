import React from 'react';
import Layout from '@theme/Layout';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from '../pages/projects/project-detail.module.css';

import FadeIn from './FadeIn';

function ProjectPageTemplate({ project }) {
  if (!project) {
    return (
      <Layout>
        <div className={styles.container}>
          <h1>Project not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={project.title}>
      <main className="container container--fluid margin-vert--lg">
        <div className={styles.projectPage}>
          <FadeIn>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.projectContent}>
              <Markdown remarkPlugins={[remarkGfm]}>{project.details}</Markdown>
            </div>
          </FadeIn>
        </div>
      </main>
    </Layout>
  );
}

export default ProjectPageTemplate;
