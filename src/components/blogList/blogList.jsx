"use client";

import Image from "next/image";
import Pagination from "../pagination/Pagination";
import styles from "./BlogList.module.css";
import Card from "../card/Card";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";

const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?catSlug=${cat}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const BlogList = ({ page, cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts, count } = await getData(page, cat);
        if (posts.length === 0) {
          setError(true);
        } else {
          setError(false);
        }

        const sanitizedPosts = posts.map((post) => ({
          ...post,
          desc: DOMPurify.sanitize(post.desc, { ALLOWED_TAGS: [] }).substring(
            0,
            60
          ),
        }));

        setPosts(sanitizedPosts);
        setCount(count);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, [page, cat]);

  const POST_PER_PAGE = 4;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  // Désactivation de "Suivant" si moins de 4 articles
  const isNextDisabled = posts.length < POST_PER_PAGE;

  return (
    <div className={styles.container}>
      {error ? (
        <p className={styles.errorMessage}>
          Aucun article trouvé pour cette catégorie.
        </p>
      ) : (
        <>
          <div className={styles.posts}>
            {posts?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          {count > 0 && (
            <Pagination
              page={page}
              hasNext={hasNext && !isNextDisabled}
              hasPrev={hasPrev}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BlogList;
