import { useAuth } from '../../hooks/useAuth';
import styles from './Nav.module.scss';

const Nav = () => {
  const { user, login, logout } = useAuth();

  console.log(user);

  return (
    <nav className={styles.nav}>
      {user ? (
        <p>
          <button onClick={() => logout()}>Log Out</button>
        </p>
      ) : (
        <p>
          <button onClick={() => login()}>Log In</button>
        </p>
      )}
    </nav>
  );
};

export default Nav;
