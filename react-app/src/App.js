import Button from "./components/Button";
import styles from "../App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>제목</h1>
      <Button text={"작업"} />
    </div>
  );
}

export default App;
