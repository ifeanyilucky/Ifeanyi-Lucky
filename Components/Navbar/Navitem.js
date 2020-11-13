import styles from "./Navbar.module.css";
const Navitem = ({ icon }) => {
  return (
    <li className={styles.navbarItem}>
      <a href="#" className={styles.iconLink}>
        {icon}
      </a>
    </li>
  );
};

export default Navitem;
