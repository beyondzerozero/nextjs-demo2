import Link from "next/link";
import { LikeButton } from "./LikeButton";
import styles from "./page.module.css";

type Props = {
  params: { photoId: string };
};

export default async function Page({ params }: Props) {
  return (
    <div>
      <h1>사진ID「{params.photoId} 상세보기</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>개요</th>
            <td>개요설명</td>
          </tr>
          <tr>
            <th>카테고리</th>
            <td>
              <Link href={`/categories/flower`}>꽃</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <LikeButton photoId={params.photoId} />
    </div>
  );
}
