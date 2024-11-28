export const HEADER_OPTIONS = (params) => ({
  GLOBAL: {
    "/section02/02-02-layout-header-global": {
      title: "게시글 등록",
      hasBack: true,
      hasLogo: false,
    },
    // URL 별로 아래에 추가
  },
  LOCAL: {
    [`/section02/02-03-layout-header-local/${params.id}`]: {
      title: "",
      hasBack: true,
      hasLogo: false,
    },
  },
});
