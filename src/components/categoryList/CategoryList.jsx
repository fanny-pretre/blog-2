"use client";

import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData).catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nos catégories stars</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={{
              pathname: "/blog",
              query: { cat: item.slug },
            }}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
            onClick={() => window.scrollTo(0, 0)}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={40}
                height={40}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
