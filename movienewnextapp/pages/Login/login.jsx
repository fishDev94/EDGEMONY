import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import Logo from "../../components/NavBar/Logo";
import { user, loginFn, userEmail } from "../../services/firebase.js";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOnGoogleClick = async () => {
    await loginFn();
    if (user?.email) {
      router.push("/");
      dispatch({ type: "SET_USER_NAME", payload: user.displayName });
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.Main_container}>
        <div className={styles.logo}>
          <Logo />
          <h2>Movie Next App</h2>
        </div>
        <span className={styles.vertical_row} />
        <div className={styles.login_section}>
          <h2>Login:</h2>
          <div className={styles.icons}>
            <FcGoogle
              onClick={handleOnGoogleClick}
              className={styles.google_icon}
            />
            <GrFacebook className={styles.fb_icon} />
            <GrTwitter className={styles.twitter_icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
