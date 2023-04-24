import Button from "./components/Button";
import styles from "./App.module.css";
import Effect from "./components/effect/Effect";
import CleanUp from "./components/effect/CleanUp";

function App() {
  return (
    <div>
      {/* <Effect /> */}
      <CleanUp />
      {/* <h1 className={styles.title}>제목</h1>
      <Button text={"작업"} /> */}
    </div>
  );
}

export default App;
