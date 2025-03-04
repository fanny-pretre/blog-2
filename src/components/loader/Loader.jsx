import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerCircle}></div>
    </div>
  );
};

export default Loader;
