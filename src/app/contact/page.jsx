"use client";

import { useState } from "react";
import styles from "./contactPage.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        subject,
        message,
      }),
    });

    const data = await response.json();

    if (data.message === "Email envoyé avec succès !") {
      alert("Votre message a bien été envoyé.");
    } else {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Nom:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Prénom:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Sujet:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={styles.textarea}
        />
      </label>
      <button type="submit" className={styles.button}>
        Envoyer
      </button>
    </form>
  );
}
