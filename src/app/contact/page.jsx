"use client";

import { useState } from "react";
import styles from "./contactPage.module.css";
import Image from "next/image";

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
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1> Contactez-nous !</h1>
        <div className={styles.form50}>
          <label className={styles.label50}>
            <input
              placeholder="Nom"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input50}
            />
          </label>
          <label className={styles.label50}>
            <input
              className={styles.input50}
              placeholder="Prénom"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label>
          <input
            placeholder="Sujet"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.formMessage}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
            placeholder="Rédigez ici votre message"
          />
        </label>
        <button type="submit" className={styles.button}>
          Envoyer
        </button>
      </form>
      <div>
        <Image src="/p1.jpeg" alt="" width={400} height={550} />
      </div>
    </div>
  );
}
