// import './App.css';
import styles from "./css/App.module.css"
import Counter from "./components/Counter"

function App() {
  return (
    <div className={styles.container}>
      <Counter title="Click this if you like MERN" increment={2} />
      <Counter title="Click this if you like counters" increment={4} />
    </div>
  );
}
export default App;