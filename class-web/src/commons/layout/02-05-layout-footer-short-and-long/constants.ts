export const HEADER_OPTIONS = (params) => ({
  GLOBAL: {
    "/section02/02-02-layout-header-global": {
      title: "게시글 등록",
      hasBack: true,
      hasLogo: false,
    },
    "/section02/02-04-layout-header-transparent": {
      title: "사진상세",
      hasBack: true,
      hasLogo: false,
      isTransparent: true,
    },
    "/section02/02-04-layout-header-untransparent": {
      title: "게시글 등록",
      hasBack: true,
      hasLogo: false,
      isTransparent: false,
    },
    "/section02/02-05-layout-footer-short-and-long": {
      title: "게시글 등록",
      hasBack: true,
      hasLogo: false,
      isTransparent: false,
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
