"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const fetchItems = () =>
  new Array(10).fill(1).map((el) => ({
    id: Math.random(),
    title: "글 제목",
  }));

export default function PullToRefreshPage() {
  const [items, setItems] = useState(fetchItems());

  const onNext = () => {
    setItems((prev) => [...prev, ...fetchItems()]);
  };

  const onRefresh = () => {
    setItems(fetchItems());
  };

  return (
    <>
      <h2>게시글 목록 ()</h2>
      <InfiniteScroll
        hasMore={true}
        dataLength={items.length}
        loader={<div>로딩중 . . . </div>}
        next={onNext}
        pullDownToRefresh={true}
        pullDownToRefreshThreshold={150}
        pullDownToRefreshContent={
          <div style={{ textAlign: "center", color: "blue" }}>
            조금 더 당겨야 새로고침됩니다.
          </div>
        }
        releaseToRefreshContent={
          <div style={{ textAlign: "center", color: "red" }}>
            지금 손을 떼면 새로고침됩니다.
          </div>
        }
        refreshFunction={onRefresh}
      >
        {items.map((el) => (
          <div key={el.id}>
            <p
              style={{
                height: "80px",
                margin: "2px",
              }}
            >
              {el.title}
            </p>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}
