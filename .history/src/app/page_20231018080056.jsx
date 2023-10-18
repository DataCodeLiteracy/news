import styles from './page.module.css'
import { css } from '@emotion/css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={css`
          background-color: white;
        `}
      >
        홈
      </div>
    </main>
  )
}
