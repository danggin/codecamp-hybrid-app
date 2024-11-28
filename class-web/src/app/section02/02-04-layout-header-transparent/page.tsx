"use client";

import Link from "next/link";

export default function LayoutHeaderTransparentPage() {
  return (
    <div>
      <img src="/images/image_01.jpg" />
      <Link href="/section02/02-04-layout-header-untransparent">
        투명하지않은 헤더 페이지로 이동
      </Link>
    </div>
  );
}
