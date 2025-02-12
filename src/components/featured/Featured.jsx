"use client";

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

import DOMPurify from "dompurify";

const getData = async (isFeatured) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?isFeatured=${true}`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = () => {
  const [safeDescription, setSafeDescription] = useState("");
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(true);
        if (data.posts && data.posts.length > 0) {
          setFeaturedPost(data.posts[0]);
          setSafeDescription(DOMPurify.sanitize(data.posts[0].desc));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!featuredPost) {
    return <p>Chargement...</p>;
  }

  console.log(featuredPost);

  return (
    <div className={styles.container}>
      <Image
        src="/hot.png"
        alt=""
        className={styles.hot}
        width={150}
        height={150}
      />
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={featuredPost.img} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{featuredPost.title}</h1>
          <p
            className={styles.postDesc}
            dangerouslySetInnerHTML={{ __html: safeDescription }}
          />
          <a className={styles.button} href={`/posts/${featuredPost.slug}`}>
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
