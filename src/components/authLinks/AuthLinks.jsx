"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Connexion
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Ecrire
          </Link>
          <span className={styles.link} onClick={signOut}>
            Déconnexion
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={handleCloseMenu}>
            Homepage
          </Link>
          <Link href="/" onClick={handleCloseMenu}>
            About
          </Link>
          <Link href="/" onClick={handleCloseMenu}>
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={handleCloseMenu}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <Link href="" onClick={() => signOut()}>
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
