"use client";

import { useParams, usePathname } from "next/navigation";
import { HEADER_OPTIONS } from "./constants";

const HeaderBase = ({ children, hasLogo, hasBack, title, isTransparent }) => {
  return (
    <>
      <header
        className="flex gap-2 items-center"
        style={{
          width: "100vw",
          height: "3.125rem",
          // 투명 헤더 적용
          position: "fixed",
          zIndex: 100,
          backgroundColor: isTransparent ? "transparent" : "yellow",
        }}
      >
        {hasLogo && <h1>로고</h1>}
        {hasBack && <div>[ 뒤로가기 ]</div>}
        {title ? <h2>{title}</h2> : <></>}
        {children ? <>{children}</> : <></>}
      </header>
      {isTransparent ? <></> : <div style={{ height: "3.125rem" }}></div>}
    </>
  );
};

export function HeaderGlobal() {
  const parmas = useParams();
  const pathname = usePathname();
  const options = HEADER_OPTIONS(parmas).GLOBAL[pathname];
  //  { title: "게시글 등록", hasLogo: false, hasBack: true}

  return (
    <div style={{ display: options ? "block" : "none" }}>
      <HeaderBase {...options} />
    </div>
  );
}

export function Header({ children, ...rest }) {
  const parmas = useParams();
  const pathname = usePathname();
  const options = HEADER_OPTIONS(parmas).LOCAL[pathname];

  return (
    <HeaderBase
      {...options}
      {...rest}
      style={{ display: options ? "block" : "none" }}
    >
      {children}
    </HeaderBase>
  );
}
