import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
