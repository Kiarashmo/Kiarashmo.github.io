import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './404.module.css';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main className={styles.notFoundPage}>
        <div className={styles.container}>
          <img 
            src="/img/undraw_docusaurus_mountain.svg" 
            alt="Not Found Illustration" 
            className={styles.illustration} 
          />
          <Heading as="h1" className={styles.title}>404 - Page Not Found</Heading>
          <p className={styles.subtitle}>
            Oops! It seems you've taken a wrong turn. The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="button button--primary button--lg">
            Go back to the homepage
          </Link>
        </div>
      </main>
    </Layout>
  );
}
