import Image from "next/image";
import styles from "./header.module.css";

const Header = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/header.png" alt="header" fill className={styles.image} />
          <Image
            src="/header-phone.png"
            alt="header"
            fill
            className={styles.imagePhone}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
