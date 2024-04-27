"use client"; // "use client" 지시어 추가

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

function getAriaCurrent(flag: boolean) {
  return flag ? { "aria-current": "page" as const } : undefined;
}

export function Nav() {
  // usePathname Hook을 사용하여 현재 경로 찾기
  const pathName = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" {...getAriaCurrent(pathName === "/")}>
            홈
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            {...getAriaCurrent(pathName.startsWith("/categories"))}
          >
            카테고리
          </Link>
        </li>
      </ul>
    </nav>
  );
}
