"use client";

import { usePathname } from "next/navigation";
import { HEADER_OPTIONS } from "./constants";

export default function HeaderGlobal() {
  const pathname = usePathname();

  const options = HEADER_OPTIONS.GLOBAL[pathname]; // { title: "게시글 등록", hasLogo: false, hasBack: true}

  return (
    <header
      className="flex gap-2 items-center"
      style={{ width: "100vw", backgroundColor: "yellow" }}
    >
      {options.hasLogo && <h1>로고</h1>}
      {options.hasBack && <div>[ 뒤로가기 ]</div>}
      {options.title ? <h2>{options.title}</h2> : <></>}
    </header>
  );
}
