"use client";
import React, { useState } from 'react';
import styles from "./inputboxes.module.css";

import generateText from '../backend/generateText'

export const InputBoxes = ({ setGeneratedText }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleGenerateMessage = async () => {
    const text = await generateText(`Write a sweet nothing for ${name}`);
    setGeneratedText(text);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Receiver's name..."
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Receiver's number..."
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button onClick={handleGenerateMessage}>Generate!</button>
    </div>
  );
}

export default InputBoxes;
