import { useRootExports } from 'umi';
import styles from './index.css';

export default function() {
  const rootExports = useRootExports();
  return (
    <div className={styles.normal}>
      <h1>App 1 </h1>
      <p>data: {JSON.stringify(rootExports.getData())}</p>
    </div>
  );
}
