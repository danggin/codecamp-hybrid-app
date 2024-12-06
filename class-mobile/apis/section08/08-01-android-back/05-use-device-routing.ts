import { useEffect } from "react";
import { BackHandler } from "react-native";

export const UseDeviceRouting = (onResponse) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      onResponse({ back: true }); // 웹뷰에 안드로이드 백버튼 눌렸다고 알려주기

      return true; // 안드로이드 백버튼 내장 기능, 기본 기능 무시하기
    });
  }, []);

  return {
    // 리턴하지 않고 백버튼 감지 대기만 하면 됨
  };
};
