"use client";
import React from 'react';
import styles from "./inputboxes.module.css";

import generateText from '../backend/generateText'

export const InputBoxes = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  setGeneratedText,
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGenerateMessage = async () => {
    const text = await generateText(`Write a kind message full of love for ${name}`);
    setGeneratedText(text);
  };

  return (
    <div className={styles.container}>
      <h>Receiver's name</h>
      <input
        className={styles.inputBox}
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <h>Receiver's phone number</h>
      <input
        className={styles.inputBox}
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button className={styles.generateButton}
        onClick={handleGenerateMessage}>Generate!</button>
    </div>
  );
}

export default InputBoxes;
