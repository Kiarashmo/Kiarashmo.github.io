import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import FadeIn from '../components/FadeIn';
import styles from './publications.module.css';

const publicationData = {
  "Conference Papers": [],
  "Journal Papers": [
    {
      title: "DrugRAG: Enhancing Pharmacy LLM Performance Through A Novel Retrieval-Augmented Generation Pipeline",
      authors: "H. Kazemzadeh, K. Mokhtari Dizaji, S. Ahmadi, M.H. Rohban, G. Aminian, T. Javaheri, et al.",
      venue: "Computer Methods and Programs in Biomedicine, 2025 | Submitted",
      githubUrl: "#", // Add GitHub link here
      paperUrl: "https://arxiv.org/abs/2512.14896" // Add PDF link here
    },
    {
      title: "Diagnosing MS from MRI Images: Highlights from the Second IAI Event 2024",
      authors: "F. Davanian, I. Adibi, M. Tajmirriahi, K. Mokhtari Dizaji, et al.",
      venue: "Journal of Medical Signals & Sensors, 2025 | Submitted",
      githubUrl: "#", // Add GitHub link here
      paperUrl: "#" // Add PDF link here
    }
  ],
  "Preprints": [
    {
      title: "MolEval: A Framework for Comparative Evaluation of Molecular Embedding Strategies",
      authors: "K. Mokhtari Dizaji, S.H. Alavi, F. Zare-Mirakabad",
      venue: "In Preparation",
      githubUrl: "#", // Add GitHub link here
      paperUrl: "#" // Add PDF link here
    }
  ]
};

function PublicationCard({ publication, index }) {
  return (
    <FadeIn delay={index * 0.2}>
      <div className={styles.publicationCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardText}>
            <h3 className={styles.cardTitle}>{publication.title}</h3>
            <p className={styles.cardAuthors}>{publication.authors}</p>
            <p className={styles.cardVenue}><em>{publication.venue}</em></p>
          </div>
          <div className={styles.cardFooter}>
            <a href={publication.githubUrl} className="button button--secondary">
              <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
              GitHub
            </a>
            <a href={publication.paperUrl} className="button button--primary">Paper</a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Publications() {
  let cardIndex = 0;
  
  return (
    <Layout title="Publications" description="Academic Publications by Kiarash Mokhtari">
      <div className={styles.container}>
        {Object.entries(publicationData).map(([category, papers]) => {
          if (papers.length === 0) return null;
          
          return (
            <div key={category} className={styles.categorySection}>
              <FadeIn delay={cardIndex * 0.1}>
                <h2 className={styles.categoryTitle}>{category}</h2>
              </FadeIn>
              <div className={styles.publicationList}>
                {papers.map((pub, index) => {
                  cardIndex++;
                  return (
                    <PublicationCard key={`${category}-${index}`} publication={pub} index={cardIndex} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
