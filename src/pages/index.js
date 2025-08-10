import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import projects from '../data/projects.json';

import FadeIn from '../components/FadeIn';

import { useThemeConfig } from '@docusaurus/theme-common';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { socials } = useThemeConfig();
  return (
    <div className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <FadeIn>
            <div className={styles.heroImage}>
              <img src="/img/profile.jpg" alt="Kiarash Mokhtari" />
            </div>
          </FadeIn>
          <div className={styles.heroText}>
            <FadeIn delay={0.2}>
              <Heading as="h1" className={styles.heroTitle}>
                Hi, I'm Kiarash!
              </Heading>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className={styles.heroSubtitle}>ML & Bioinformatics Researcher, AI Developer</p>
            </FadeIn>
            <FadeIn delay={0.8}>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/projects">
                  View My Projects
                </Link>
                <Link className="button button--secondary button--lg" to="/about">
                  More About Me
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={1.0}>
              <div className={styles.heroSocials}>
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={styles.heroSocialLink}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
      <Layout
        title="Home"
        description="Kiarash Mokhtari - Computer Science Graduate">
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
