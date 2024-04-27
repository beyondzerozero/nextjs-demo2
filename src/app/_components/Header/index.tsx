import Link from "next/link";
import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <p>
        {/* SPA 검색을 제공하는 링크 구성요소 */}
        <Link href="/">사진공유</Link>
      </p>
    </header>
  );
}
