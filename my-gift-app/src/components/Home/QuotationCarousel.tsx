'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './QuotationCarousel.module.css';
import { AlignCenter } from 'lucide-react';

const QuotationCarousel: React.FC = () => {
  const quotes = [
    { text: "So easy to find the perfect gift!", author: "John S." },
    { text: "Saved me hours of searching!", author: "Emily R." },
    { text: "Amazing gift ideas!", author: "Jane D." },
  ];

  return (
    <>
    <h1 style={{ textAlign: "center" }}>What other users say</h1>

    <div className={styles.carouselContainer}>
      <motion.div
        className={styles.carousel}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      >
        {[...quotes, ...quotes].map((quote, index) => (
          <div key={index} className={styles.quoteCard}>
            <p className={styles.quoteText}>{quote.text}</p>
            <p className={styles.quoteAuthor}>- {quote.author}</p>
          </div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default QuotationCarousel;