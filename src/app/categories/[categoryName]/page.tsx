import Link from "next/link";
import { getPage } from "@/utils";
import styles from "./page.module.css";

type Props = {
  params: { categoryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: Props) {
  const page = getPage(searchParams);
  return (
    <div>
      <h1>카테고리 목록</h1>
      <h2>
        카테고리: {params.categoryName}, {page} 페이지
      </h2>
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
      <ul className={styles.pagination}>
        {page !== 1 && (
          <li>
            <Link href={`/categories/${params.categoryName}?page=${page - 1}`}>
              이전
            </Link>
          </li>
        )}
        <li>
          <Link href={`/categories/${params.categoryName}?page=${page + 1}`}>
            다음
          </Link>
        </li>
      </ul>
    </div>
  );
}
