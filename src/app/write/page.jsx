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

  console.log(catSlug);

  // Initialisation de Quill avec le thème "bubble"
  const { quill, quillRef } = useQuill({
    theme: "bubble",
    placeholder: "Qu'avez-vous à raconter aujourd'hui ?",
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
    console.log({
      title,
      desc: value,
      img: media, // Assure-toi que `media` est bien l'URL de l'image
      slug: slugify(title),
      catSlug: catSlug || "divers",
    });

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media, // Utilisation de l'URL de l'image téléchargée
        slug: slugify(title),
        catSlug: catSlug || "divers",
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
        <option value="divers">divers</option>
        <option value="crochet">crochet</option>
        <option value="tricot">tricot</option>
        <option value="amigurumi">amigurumi</option>
        <option value="couture">couture</option>
        <option value="cadeau">cadeau</option>
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
