"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = () => {
  const [posts, setPosts] = useState([]);

  // Récupération des posts
  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const res = await fetch("/api/posts?popular=true"); // Récupérer les posts les plus populaires
        if (!res.ok) throw new Error(res.error);

        const data = await res.json();
        setPosts(data.posts); // Limite à 5 posts
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <div className={styles.items}>
      {posts.map((item) => (
        <div key={item.id} className={styles.item}>
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
        </div>
      ))}
    </div>
  );
};

export default MenuPosts;
