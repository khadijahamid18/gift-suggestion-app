'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideHeart } from 'lucide-react';
import { z } from 'zod';
import styles from './SuggestionForm.module.css';

const suggestionSchema = z.object({
  relationship: z.string().min(1, 'Relationship is required'),
  age: z.number().min(1).max(120, 'Invalid age'),
  gender: z.enum(['male', 'female', 'other']),
  budget: z.number().min(0, 'Budget cannot be negative'),
  giftType: z.string().min(1, 'Gift type is required'),
  occasion: z.string().min(1, 'Occasion is required'),
});

const SuggestionForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    relationship: '',
    age: '',
    gender: '',
    budget: '',
    giftType: '',
    occasion: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const relationshipOptions = [
    'Partner',
    'Family Member',
    'Friend',
    'Colleague',
    'Child',
    'Parent',
  ];

  const genderOptions = ['Male', 'Female', 'Other'];

  const questions = [
    'Who are you shopping for?',
    'What is the recipient\'s age?',
    'What is the recipient\'s gender?',
    'What is your budget ($)?',
    'What type of gift are you looking for (e.g., Tech, Fashion)?',
    'What is the occasion (e.g., Birthday)?',
  ];

  const fields = [
    { name: 'relationship', type: 'buttons', options: relationshipOptions },
    { name: 'age', type: 'number', placeholder: 'Enter age and press Enter' },
    { name: 'gender', type: 'buttons', options: genderOptions },
    { name: 'budget', type: 'number', placeholder: 'Enter budget and press Enter' },
    { name: 'giftType', type: 'text', placeholder: 'Enter gift type and press Enter' },
    { name: 'occasion', type: 'text', placeholder: 'Enter occasion and press Enter' },
  ];

  const handleSelection = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value.toLowerCase() });
    setErrors((prev) => ({ ...prev, [name]: '' }));
    if (step < fields.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (formData[fields[step].name as keyof typeof formData] && step < fields.length - 1) {
        setStep(step + 1);
      }
    }
  };

  const validateStep = () => {
    try {
      suggestionSchema.parse({ ...formData, age: parseInt(formData.age) || 0, budget: parseInt(formData.budget) || 0 });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc, curr) => ({
          ...acc,
          [curr.path[0]]: curr.message,
        }), {});
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form submitted:', formData);
    }
  };

  const progress = ((step + 1) / fields.length) * 100;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2 className={styles.title}>Find the Perfect Gift</h2>
        <span className={styles.stepCount}>Step {step + 1} of {fields.length}</span>
      </div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className={styles.questionContainer}>
        <LucideHeart className={styles.questionIcon} />
        <h3 className={styles.question}>{questions[step]}</h3>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={styles.optionsContainer}
        >
          {fields[step].type === 'buttons' ? (
            <div className={styles.buttonGrid}>
              {fields[step].options?.map((option) => (
                <motion.button
                  key={option}
                  type="button"
                  className={styles.optionButton}
                  onClick={() => handleSelection(fields[step].name, option)}
                  whileHover={{ scale: 1.02, borderColor: 'var(--focus-accent)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option}
                  <span className={styles.arrow}>›</span>
                </motion.button>
              ))}
            </div>
          ) : (
            <div className={styles.formField}>
              <input
                type={fields[step].type}
                name={fields[step].name}
                placeholder={fields[step].placeholder}
                value={formData[fields[step].name as keyof typeof formData]}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={styles.input}
                autoFocus
              />
              {errors[fields[step].name] && <span className={styles.error}>{errors[fields[step].name]}</span>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      {step === fields.length - 1 && (
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: 'var(--hover-shadow)' }}
          className={styles.submitButton}
        >
          Get Suggestions
        </motion.button>
      )}
    </form>
  );
};

export default SuggestionForm;