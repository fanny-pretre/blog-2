"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  const [posts, setPosts] = useState([]);

  // Récupération des posts
  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const res = await fetch("/api/posts?sort=popular&page=1"); // Récupérer les posts les plus populaires
        if (!res.ok)
          throw new Error(
            "Erreur lors de la récupération des posts populaires"
          );

        const data = await res.json();
        setPosts(data.posts.slice(0, 5)); // Limite à 5 posts
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <div className={styles.items}>
      {posts.map((item) => (
        <Link href="/" key={item.id} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <Link
              href={{
                pathname: "/blog",
                query: { cat: item.catSlug },
              }}
            >
              <span className={`${styles.category}`}>{item.catSlug}</span>
            </Link>
            <Link href={`/posts/${item.slug}`}>
              <h3 className={styles.postTitle}>
                {item.title || "Titre du post"} {/* Titre du post */}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Fanny Prêtre</span>
                <span className={styles.date}>
                  -{" "}
                  {new Date(item.createdAt).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
