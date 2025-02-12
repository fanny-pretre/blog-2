"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuFavorites.module.css";

const MenuFavorites = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFavoritePosts = async () => {
      try {
        const res = await fetch("/api/posts?favorite=true");
        if (!res.ok)
          throw new Error("Erreur lors de la récupération des posts préférés");

        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchFavoritePosts();
  }, []);

  return (
    <div className={styles.items}>
      {posts.map((item) => (
        <div key={item.id} className={styles.item}>
          {item.img ? (
            <Image
              src={item.img}
              alt=""
              className={styles.image}
              width={60}
              height={60}
            />
          ) : (
            <Image
              src="/p1.jpeg"
              alt=""
              className={styles.image}
              width={60}
              height={60}
            />
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
        </div>
      ))}
    </div>
  );
};

export default MenuFavorites;
