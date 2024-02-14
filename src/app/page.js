"use client";

import styles from "./page.module.css";
import React, { useState } from 'react';

import InputBoxes from '../components/InputBoxes'

export default function Home() {
  const [generatedText, setGeneratedText] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          Helping people find love, one whisper at a time. by Joe Triolo and Jeainny Kim
        </div>
      </div>
      <div className={styles.center}>
        <h2 className={styles.title}>SWEET NOTHINGS</h2>
        <p>Schedule sweet, authentic messages to your partner's voicemail.
          Never forget a birthday or a wedding anniversary!</p>

        <InputBoxes setGeneratedText={setGeneratedText} />
        <div className={styles.card}>{generatedText}</div>
      </div>
    </main>
  );
}
