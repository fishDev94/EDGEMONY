import styles from "./index.module.scss";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import Logo from "../../components/NavBar/Logo";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.Main_container}>
        <div className={styles.logo}>
          <Logo />
          {/* <span className={styles.row} /> */}
          <h2>Movie Next App</h2>
        </div>
        <span className={styles.vertical_row} />
        <div className={styles.login_section}>
          <h2>Login:</h2>
          <div className={styles.icons}>
            <FcGoogle className={styles.google_icon} />
            <GrFacebook className={styles.fb_icon} />
            <GrTwitter className={styles.twitter_icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
