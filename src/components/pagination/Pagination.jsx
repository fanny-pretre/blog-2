"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        {" "}
        Précédent{" "}
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        {" "}
        Suivant{" "}
      </button>
    </div>
  );
}

export default Pagination;
