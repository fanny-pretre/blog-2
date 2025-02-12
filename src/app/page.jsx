import CardList from "@/components/cardList/CardList";
import styles from "./homepage.module.css";

import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams; // On attend la résolution
  const page = parseInt(resolvedSearchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Header />
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
