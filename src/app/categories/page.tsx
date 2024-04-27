import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>카테고리 목록</h1>
      <ul>
        <li>
          {/*  Route의 /categories/[categoryName] 이동하기 */}
          <Link href="/categories/flower">꽃</Link>
        </li>
        <li>
          <Link href="/categories/animal">동물</Link>
        </li>
        <li>
          <Link href="/categories/landscape">풍경</Link>
        </li>
      </ul>
    </div>
  );
}
