import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

import { FaPython, FaDatabase, FaGitAlt, FaDocker, FaAward, FaTrophy} from 'react-icons/fa';
import { SiPytorch, SiOpencv, SiDjango, SiCplusplus, SiR, SiTensorflow, SiMoleculer} from 'react-icons/si';

const skills = {
  "Specializations": [
    "Machine Learning", 
    "Bioinformatics", 
    "Secure and Trustworthy AI",
    "Probabilistic ML & reasoning", 
    "Natural Language Processing",
  ],
  "Languages": [
    { name: "Python", level: 95, icon: <FaPython /> },
    { name: "C++", level: 85, icon: <SiCplusplus /> },
    { name: "R", level: 70, icon: <SiR /> },
    { name: "SQL", level: 70, icon: <FaDatabase /> },
  ],
  "Frameworks & Tools": [
    { name: "Pytorch", icon: <SiPytorch /> },
    { name: "Tensorflow", icon: <SiTensorflow /> },
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Rdkit", icon: <SiMoleculer /> }
  ]
};

const experience = [
  {
    title: "Research Assistant",
    company: "Sharif University of Technology Computational Biology Lab (SUCBG)",
    period: "May. 2025 - Present",
    description: "Developed LLMs for clinical support while applying deep learning to model complex biological systems for computational biology research.",
    logo: "/img/logos/sharif.jpg"
  },
  {
    title: "Research Assistant",
    company: "Computational Biology Research Center (CBRC)",
    period: "Jun. 2023 - Oct. 2025",
    description: "Developed GANs and Transformers to optimize molecular structures, fine-tuning transformers with MLM and contrastive learning for classification and regression tasks.",
    logo: "/img/logos/cbrc.png"
  }
];

const education = [
  {
    school: "Amirkabir University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "Sep. 2019 - Jun. 2024",
    logo: "/img/logos/aut.png"
  }
];

const awards = [
  {
    title: "1st Place in MS Lesion Segmentation Challenge",
    company: "Isfahan AI (IAI) Event",
    period: "Oct. 2024",
    description: "As part of the CBRC team, secured first place out of 73 teams in a challenge focused on segmenting Multiple Sclerosis (MS) lesions from MRI FLAIR images.",
    icon: <FaTrophy />
  },
];

import FadeIn from '../components/FadeIn';

import CircularProgressBar from '../components/CircularProgressBar';

function SkillsSection() {
  return (
    <div className={styles.skillsSection}>
      <FadeIn>
        <Heading as="h2" className={styles.sectionTitle}>My Skills</Heading>
      </FadeIn>
      <div className={styles.skillsGrid}>
        {Object.entries(skills).map(([category, list], index) => (
          <FadeIn delay={0.2 * (index + 1)} key={category}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.skillsList}>
                {(() => {
                  if (category === 'Languages') {
                    return list.map(skill => (
                      <li key={skill.name} className={styles.skillCircularItem}>
                        <CircularProgressBar
                          level={skill.level}
                          radius={45}
                          color={"var(--ifm-color-secondary)"}
                        />
                        <span className={styles.skillName}>
                          {skill.icon} {skill.name}
                        </span>
                      </li>
                    ));
                  } else if (category === 'Frameworks & Tools') {
                    return list.map(skill => (
                      <li key={skill.name} className={styles.skillItem}>
                        {skill.icon} {skill.name}
                      </li>
                    ));
                  } else {
                    return list.map(skill => (
                      <li key={skill} className={styles.skillItem}>
                        {skill}
                      </li>
                    ));
                  }
                })()}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}



function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <FadeIn key={index}>
          <div className={`${styles.timelineItem} ${index < items.length - 1 ? styles.hasLine : ''}`}>
            <div className={styles.timelineContent}>
              {item.icon ? (
                <div className={styles.itemIcon}>
                  {item.icon}
                </div>
              ) : (
                <img src={item.logo} alt={`${item.company || item.school} logo`} className={styles.itemLogo} />
              )}
              <div className={styles.itemText}>
                <h3 className={styles.itemTitle}>{item.title || item.degree}</h3>
                <p className={styles.itemSubtitle}>{item.company || item.school}</p>
                <span className={styles.itemPeriod}>{item.period}</span>
                {item.description && <p className={styles.itemDescription}>{item.description}</p>}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <Layout title="About Me">
      <div className={styles.aboutPage}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.aboutHeader}>
              <Heading as="h1">About Me</Heading>
              <a href="/files/CV_Kiarash_Mokhtari.pdf" className="button button--secondary" download>
                <i className="fas fa-file-pdf" style={{ marginRight: '8px' }}></i>
                Download Full CV
              </a>
            </div>
          </FadeIn>
          
          <div className={styles.aboutContent}>
            <div className={styles.leftColumn}>
              <FadeIn delay={0.2}>
                <p className={styles.summary}>
                  I'm a Computer Science graduate from Amirkabir University of Technology with a passion for the intersection of machine learning and bioinformatics. My research focuses on developing advanced computational models for computational biology and enhancing medical diagnostics through AI. I have hands-on experience in building and fine-tuning generative models for molecular optimization and developing LLMs to support clinical decisions.  I am passionate about leveraging AI to solve complex challenges in healthcare.
                </p>
              </FadeIn>
              <SkillsSection />
            </div>
            <div className={styles.rightColumn}>
              <FadeIn>
                <Heading as="h2" className={styles.sectionTitle}>My Experience</Heading>
              </FadeIn>
              <Timeline items={experience} />

              <FadeIn>
                <Heading as="h2" className={styles.sectionTitle}>Education</Heading>
              </FadeIn>
              <Timeline items={education} />

              <FadeIn>
                <Heading as="h2" className={styles.sectionTitle}>Honors & Awards</Heading>
              </FadeIn>
              <Timeline items={awards} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}