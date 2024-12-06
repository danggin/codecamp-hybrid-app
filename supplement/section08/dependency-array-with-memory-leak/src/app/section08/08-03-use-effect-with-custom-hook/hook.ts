"use client";

import { useEffect, useState } from "react";

export default function useCustomHook() {
  const [count, setCount] = useState(0);

  const onClickCountCheck = () => {
    alert(`현재 카운트 : ${count}`);
  };

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return {
    onClickCountCheck,
  };
}
