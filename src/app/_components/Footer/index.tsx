import Link from "next/link";
import styles from "./style.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/privacy">개인정보보호</Link>
        </li>
        <li>
          <Link href="/company">회사소개</Link>
        </li>
      </ul>
    </footer>
  );
}
