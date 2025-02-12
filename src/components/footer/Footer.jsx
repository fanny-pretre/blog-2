import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <h1 className={styles.logoText}> {"HOOK'COEUR"}</h1>
        </div>
        <p className={styles.desc}>
          {
            "Ce site est un projet fictif réalisé pour pratiquer mes compétences en dévéloppement web ! Si vous souhaitez en savoir plus, n'hésitez pas à me contacter 🤍"
          }
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Liens</span>
          <Link href="/">Accueil</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">A propos</Link>
          <Link href="/login">Connexion</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Catégories</span>
          <Link href="/blog?cat=crochet">Crochet</Link>
          <Link href="/blog?cat=tricot">Tricot</Link>
          <Link href="blog?cat=couture">Couture</Link>
          <Link href="/blog?cat=amigurumi">Amigurumi</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
