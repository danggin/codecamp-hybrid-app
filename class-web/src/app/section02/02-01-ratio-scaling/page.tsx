export default function RatioScalingPage() {
  // 1. 피그마에 제시된 사이즈가 360 * 840 이라고 가정
  // => 하지만 아래 화면은 비율이 늘어나지 않음

  //   return (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         backgroundColor: "lightblue",
  //       }}
  //     >
  //       <div
  //         style={{
  //           width: "300px",
  //           height: "400px",
  //           backgroundColor: "yellowgreen",
  //         }}
  //       >
  //         box
  //       </div>
  //     </div>
  //   );

  // 2. 비율 늘리기
  // pixel => rem 으로 변경 (html font-size에 의존)
  // html의 font-size를 화면 사이즈에 비례하도록 변경
  // => 모든 컴포넌트 단위를 rem으로 적용

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          width: "18.75rem",
          height: "25rem",
          backgroundColor: "yellowgreen",
        }}
      >
        box
      </div>
    </div>
  );
}
