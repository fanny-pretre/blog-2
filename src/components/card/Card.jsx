import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card({ item }) {
  // Récupération de la date au format année/mois/jour
  const date = new Date(item.createdAt);
  const day = String(date.getDate()).padStart(2, "0"); // Jour (format 2 chiffres)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mois (format 2 chiffres, mois commence à 0)
  const year = date.getFullYear(); // Année

  // Formater la date dans le format "jour/mois/année"
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className={styles.container}>
      {item.img && (
        <>
          <div className={styles.imageContainer}>
            <Image src={item.img} alt="" fill className={styles.image} />
          </div>
          <Image
            src="/new.png"
            alt=""
            className={styles.label}
            width={150}
            height={30}
          />
        </>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formattedDate} - </span>
          <span className={styles.category}>{item.catSlug} </span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc}...</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          En savoir plus
        </Link>
      </div>
    </div>
  );
}

export default Card;
