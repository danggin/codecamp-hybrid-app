"use client";

import { useEffect, useState } from "react";
import { Header } from "@/commons/layout/02-03-layout-header-local/header";

export default function LayoutHeaderLocalPage() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const result = "철수가 쓴 글";
      setTitle(result);
    }, 3000);
  }, []);

  return (
    <>
      <Header title={title}>
        <button>북마크</button>
      </Header>
      <div>내용</div>
      <div>내용</div>
      <div>내용</div>
      <div>내용</div>
      <div>내용</div>
    </>
  );
}
