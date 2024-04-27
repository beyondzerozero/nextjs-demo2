import Link from "next/link";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.container}>
      <h1>메인</h1>
      <ul>
        <li>
          <Link href={`/photos/1`}>사진1</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>사진2</Link>
        </li>
        <li>
          <Link href={`/photos/3`}>사진3</Link>
        </li>
      </ul>
    </div>
  );
}
