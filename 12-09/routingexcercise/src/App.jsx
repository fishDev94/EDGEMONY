import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MealCardSK from "./components/meal-card-sk";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
