import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import MenuFavorites from "../menuFavorites/MenuFavorites";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Les plus populaires </h2>
      <h1 className={styles.title}>Les mailles fatales </h1>
      <MenuPosts />
      <h2 className={styles.subtitle}>A découvrir par thème </h2>
      <h1 className={styles.title}>Catégories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Mes petits chouchous </h2>
      <h1 className={styles.title}>Favoris du moment</h1>
      <MenuFavorites />
    </div>
  );
};

export default Menu;
