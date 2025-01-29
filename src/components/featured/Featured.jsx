import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const getData = async (isFeatured) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?isFeatured=${true}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const featuredPost = await getData(true);
  console.log(featuredPost);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <p> Passe les pelotes, c&apos;est moi qui tricote !</p>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{featuredPost.posts[0].title}</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
