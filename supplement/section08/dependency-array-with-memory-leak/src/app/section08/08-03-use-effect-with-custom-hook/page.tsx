"use client";

import useCustomHook from "./hook";
import { useEffect } from "react";

export default function UseEffectWithCustomHookPage() {
  const { onClickCountCheck } = useCustomHook();

  useEffect(() => {
    window.addEventListener("click", onClickCountCheck);

    return () => {
      window.removeEventListener("click", onClickCountCheck);
    };
  }, [onClickCountCheck]);

  return <div>아무데나 클릭하면 카운트를 확인할 수 있어요!</div>;
}
