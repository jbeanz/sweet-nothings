"use client";

import styles from "./page.module.css";
import React, { useState } from 'react';

import InputBoxes from '../components/InputBoxes'

import generateText from '../backend/generateText'
import { sendMessage } from './sendMessage'

export default function Home() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('1');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerateMessage = async () => {
    const text = await generateText(`Write a kind message full of love for ${name}`);
    setGeneratedText(text);
  };

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

        <InputBoxes
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setGeneratedText={setGeneratedText}
        />
        <div className={styles.card}>{generatedText}</div>
        <div className={styles.container}>
          <button className={styles.button}
            onClick={handleGenerateMessage}>Redo!</button>
          <button className={styles.sendButton}
            onClick={() => { sendMessage(phoneNumber) }}>Send!</button>
        </div>
      </div>
    </main>
  );
}
