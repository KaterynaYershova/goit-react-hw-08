import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Contacts App</h1>
      <p>Keep track of all your contacts in one place.</p>
    </div>
  );
};

export default HomePage;
