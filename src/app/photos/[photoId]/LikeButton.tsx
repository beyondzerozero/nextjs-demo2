"use client";

export function LikeButton({ photoId }: { photoId: string }) {
  // onClick 이벤트 핸들러 추가가 필요함
  return (
    <button
      onClick={() => {
        console.log(`photoId ${photoId} 가 좋아요 버튼을 누름!`);
      }}
    >
      좋아요.
    </button>
  );
}
