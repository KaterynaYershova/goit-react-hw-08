import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <p className={styles.username}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={styles.logoutBtn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
