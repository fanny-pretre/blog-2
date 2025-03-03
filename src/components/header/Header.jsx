"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const imageSrc = theme === "light" ? "/header.png" : "/header-dark.png";
  const imageSrcPhone =
    theme === "light" ? "/header-phone.png" : "/header-phone-dark.png";

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={imageSrc} alt="header" fill className={styles.image} />
          <Image
            src={imageSrcPhone}
            alt="header"
            fill
            className={styles.imagePhone}
          />
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            fill="#ff0045"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
