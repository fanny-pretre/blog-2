"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    toast.success("Déconnexion réussie", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
      signOut();
    }, 2000);
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
          <span className={styles.link} onClick={handleSignOut}>
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
          <a href="/" onClick={handleCloseMenu}>
            Accueil
          </a>
          <Link href="/about" onClick={handleCloseMenu}>
            A propos
          </Link>
          <Link href="/contact" onClick={handleCloseMenu}>
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={handleCloseMenu}>
              Connexion
            </Link>
          ) : (
            <>
              <Link href="/write" onClick={handleCloseMenu}>
                Ecrire
              </Link>
              <Link href="" onClick={handleSignOut}>
                Déconnexion
              </Link>
            </>
          )}
        </div>
      )}
      {/* Conteneur pour les toasts */}
      <ToastContainer />
    </>
  );
};

export default AuthLinks;
