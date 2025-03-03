"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    const scrollY = window.scrollY; // Sauvegarde de la position actuelle
    sessionStorage.setItem("scrollPosition", scrollY); // Stockage temporaire

    router.push(`?page=${newPage}`, { scroll: false }); // Empêche le scroll auto
  };

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition !== null) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10)); // Restauration de la position
      sessionStorage.removeItem("scrollPosition"); // Nettoyage
    }
  }, []);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => handlePageChange(page - 1)}
        disabled={!hasPrev}
      >
        Précédent
      </button>
      <button
        className={styles.button}
        onClick={() => handlePageChange(page + 1)}
        disabled={!hasNext}
      >
        Suivant
      </button>
    </div>
  );
}

export default Pagination;
