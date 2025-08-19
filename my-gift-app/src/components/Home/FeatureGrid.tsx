'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LucideHeart, LucideStar, LucideUser } from 'lucide-react';
import styles from './FeatureGrid.module.css';

const FeatureGrid: React.FC = () => {
  const features = [
    { icon: LucideHeart, title: 'Add to Favorites', description: 'Save your favorite gift ideas.' },
    { icon: LucideStar, title: 'AI Recommendations', description: 'Personalized suggestions powered by AI.' },
    { icon: LucideUser, title: 'Recipient Profiles', description: 'Store recipient details for quick access.' },
  ];

  return (
    <div className={styles.featureGrid}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={styles.featureCard}
          whileHover={{ scale: 1.05, boxShadow: 'var(--hover-shadow)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <feature.icon className={styles.featureIcon} />
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <p className={styles.featureDescription}>{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;