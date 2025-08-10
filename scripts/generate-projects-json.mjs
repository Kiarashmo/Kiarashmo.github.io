import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '..', 'projects');
const dataOutputDir = path.join(__dirname, '..', 'src', 'data');
const pagesOutputDir = path.join(__dirname, '..', 'src', 'pages', 'projects');
const dataOutputFile = path.join(dataOutputDir, 'projects.json');

function generateProjectFiles() {
  // Ensure output directories exist
  if (!fs.existsSync(dataOutputDir)) {
    fs.mkdirSync(dataOutputDir, { recursive: true });
  }
  if (!fs.existsSync(pagesOutputDir)) {
    fs.mkdirSync(pagesOutputDir, { recursive: true });
  }

  const projectFiles = fs.readdirSync(projectsDir).filter(file => file.endsWith('.mdx'));

  const projects = projectFiles.map(file => {
    const filePath = path.join(projectsDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const id = file.replace(/\.mdx$/, '');
    
    // Create individual page component for each project
    const pageContent = `
import React from 'react';
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import projects from '../../data/projects.json';

function ProjectPage() {
  const project = projects.find(p => p.id === '${id}');
  return <ProjectPageTemplate project={project} />;
}

export default ProjectPage;
`;
    fs.writeFileSync(path.join(pagesOutputDir, `${id}.js`), pageContent.trim());

    return {
      id,
      ...data,
      details: content,
    };
  });

  fs.writeFileSync(dataOutputFile, JSON.stringify(projects, null, 2));
  console.log('Successfully generated project files and projects.json!');
}

generateProjectFiles();
