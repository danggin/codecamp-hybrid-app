"use client";

import { useDeviceSetting } from "@/commons/settings/05-02-device-setting-redirect/hook";
import { useState } from "react";

export default function PictureFullScreenPage() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchApp } = useDeviceSetting();

  const onClickFullScreen = async () => {
    setIsLoading(true);

    window.setTimeout(() => {
      setIsFullScreen(true);
      fetchApp({ query: "toggleDeviceLayoutForNotchTranslucentSet" });
      fetchApp({ query: "toggleDeviceLayoutForPinchZoomSet" });
      document
        .querySelector("meta[name='viewport']")
        ?.setAttribute(
          "content",
          "width=device-width, initail-scale=1.0, minimun-scale=1.0, maximum-scale=3.0, user-scalable=yes"
        );

      window.setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 100);
  };

  const onClickClose = async () => {
    setIsLoading(true);

    window.setTimeout(() => {
      setIsFullScreen(false);
      fetchApp({ query: "toggleDeviceLayoutForNotchTranslucentSet" });
      fetchApp({ query: "toggleDeviceLayoutForPinchZoomSet" });
      document
        .querySelector("meta[name='viewport']")
        ?.setAttribute(
          "content",
          "width=device-width, initail-scale=1.0, minimun-scale=1.0, maximum-scale=1.0, user-scalable=no"
        );

      window.setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 100);
  };

  if (isLoading) return <></>;

  return (
    <div>
      {isFullScreen ? (
        <div
          style={{
            width: "100vw", // 실제 프로젝트시? => 모달 페이지 만들고 페러렐라우팅하기
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <button
            onClick={onClickClose}
            style={{
              position: "fixed", // 실제 프로젝트시? => 글로벌헤더에 hasExit 추가하기
              left: "20px",
              top: "40px",
              color: "red",
            }}
          >
            X
          </button>
          <img src="/images/image_01.jpg" />
        </div>
      ) : (
        <>
          <img src="/images/image_01.jpg" />
          <button onClick={onClickFullScreen}>전체화면에서 사진 보기</button>
        </>
      )}
    </div>
  );
}
