"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.bubble.css";

import { uploadToCloudinary } from "@/utils/cloudinary"; // Import de la fonction d'upload

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(""); // L'URL de l'image téléchargée
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  // Initialisation de Quill avec le thème "bubble"
  const { quill, quillRef } = useQuill({
    theme: "bubble",
    placeholder: "Tell your story...",
  });

  // Synchronisation de l'état lorsque le contenu de l'éditeur change
  if (quill) {
    quill.on("text-change", () => {
      setValue(quill.root.innerHTML); // Récupère le contenu HTML de l'éditeur
    });
  }

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      try {
        const imageUrl = await uploadToCloudinary(selectedFile);
        setMedia(imageUrl); // On met à jour l'URL de l'image téléchargée
      } catch (error) {
        console.error("Erreur lors de l'upload de l'image", error);
      }
    }
  };

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media, // Utilisation de l'URL de l'image téléchargée
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Titre"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={handleFileChange} // Appel à la fonction de changement de fichier
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        {/* Éditeur Quill */}
        <div ref={quillRef} className={`${styles.textArea}`} />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publier
      </button>
    </div>
  );
};

export default WritePage;
