import { useState } from 'react';
import styles from './Counter.module.scss'


const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>{counter}</h1>
      <button
        className={styles.button}
        onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
