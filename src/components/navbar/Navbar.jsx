import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <ThemeToggle />
      </div>
      <div className={styles.logo}>
        {" "}
        <Image src="/logo-1.png" alt="logo" width={190} height={100} />
      </div>
      <div className={styles.links}>
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
