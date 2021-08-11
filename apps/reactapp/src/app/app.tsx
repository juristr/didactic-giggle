import styles from './app.module.css';

import { Imgs, NonLazyImgs } from '@myorg-next-imports/imgs';

export function App() {
  return (
    <div className={styles.app}>
      <Imgs imageName="nx-logo-white" />
      <NonLazyImgs />
    </div>
  );
}

export default App;
