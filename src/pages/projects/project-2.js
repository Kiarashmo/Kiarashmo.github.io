import React from 'react';
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import projects from '../../data/projects.json';

function ProjectPage() {
  const project = projects.find(p => p.id === 'project-2');
  return <ProjectPageTemplate project={project} />;
}

export default ProjectPage;