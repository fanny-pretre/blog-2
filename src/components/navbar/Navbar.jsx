import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/logo.jpg" alt="logo" width={100} height={70} />
      </div>
      <div className={styles.logo}> Hooker</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          {" "}
          Accueil
        </Link>
        <Link href="/contact" className={styles.link}>
          {" "}
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          {" "}
          A propos
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
