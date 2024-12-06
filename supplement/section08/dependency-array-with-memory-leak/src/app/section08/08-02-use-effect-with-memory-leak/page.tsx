"use client";

import { useEffect, useState } from "react";

export default function UseEffectWithMemoryLeakPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //1. 문제상황
    //   => 대기하는 기능들( ex. setInterval, addEventListener 등)이 실행중인 상태에서
    //      페이지가 이동되거나 state가 변경되어 리렌더되거나 useEffect의 의존선배열을 감지하여 재실행될 때
    //      해당 대기하는 기능들은 여전히 작동중이므로 메모리에서 삭제되지 않음 => 메모리 누수

    // 2. 해결방법
    //    => 대기하는 기능들을 useEffect에서 사용할 때
    //       clean up 함수(기존의 componentWillMount)에서 강제로 삭제하고 나가자

    const interval = setInterval(() => {
      alert(`현재 카운트는 몇일까요? ${count}입니다.`);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const onClickCountUp = () => {
    setCount(count + 1);
    console.log(count);
  };

  return <button onClick={onClickCountUp}>카운트 + 1</button>;
}
