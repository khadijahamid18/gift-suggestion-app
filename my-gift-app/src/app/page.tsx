'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import SuggestionForm from '../components/shared/SuggestionForm';
import QuotationCarousel from '..//components/Home/QuotationCarousel';
import FeatureGrid from '../components/Home/FeatureGrid';

import '../styles/variables.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>GiftGenix</div>
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#about" className={styles.navLink}>About</a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={styles.signInButton}
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: 'var(--hover-shadow)' }}
            className={styles.getStartedButton}
          >
            Get Started
          </motion.button>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Find the Perfect Gift, Every Time</h1>
            <p className={styles.heroSubtitle}>Personalized gift suggestions tailored to your needs.</p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: 'var(--hover-shadow)' }}
              className={styles.heroCta}
            >
              Discover Now
            </motion.button>
          </div>
          <div className={styles.heroForm}>
            <SuggestionForm />
          </div>
        </section>

        <section className={styles.carouselSection}>
          <QuotationCarousel />
        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <FeatureGrid />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: 'var(--hover-shadow)' }}
            className={styles.registerButton}
          >
            Register Now
          </motion.button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 GiftGenix. All rights reserved.</p>
      </footer>
    </div>
  );
}