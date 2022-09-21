import styles from "./App.module.scss";
import InputContainer from "./components/inputcontainer";
import TaskList from "./components/tasklist";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";

function App() {
  const store = useSelector((state) => state);

  return (
    <div className={styles.App}>
      <img
        className={styles.background}
        src="https://images.unsplash.com/photo-1569161031678-f49b4b9ca1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <NavBar />
      <div className={styles.mainContainer}>
        <InputContainer />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
