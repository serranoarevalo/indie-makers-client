export default {
  home: "/",
  join: "?join",
  asJoin: "/join",
  login: "/login",
  makers: "/makers",
  about: "/about",
  blog: "/reviews",
  products: "/products",
  todos: "/todos",
  blogDetail: (name: string) => `/review?slug=${name}`,
  asBlogDetail: (name: string) => `/review/${name}`,
  new: "/new",
  productDetail: (name: string) => {
    const formatted = name.toLowerCase().replace(" ", "-");
    return `/product?id=${formatted}`;
  },
  asProductDetail: (name: string) => {
    const formatted = name.toLowerCase().replace(" ", "-");
    return `/product/${formatted}/`;
  },
  userDetail: (username: string) => `/maker?username${username}`,
  asUserDetail: (username: string) => `/maker/${username}`,
  productsFn: (page: number, tab: string) =>
    `/products?tab=${tab}&page=${page}`,
  asProductsFn: (page: number, tab: string) =>
    `/products/${tab.toLowerCase()}${page === 0 ? "" : `?page=${page}`}`,
  makersFn: (page: number, tab: string) => `/makers?tab=${tab}&page=${page}`,
  asMakersFn: (page: number, tab: string) =>
    `/makers/${tab.toLowerCase()}${page === 0 ? "" : `?page=${page}`}`,
  makerToDo: (username: string) => `/maker?username=${username}&tab=todo`,
  asMakerToDo: (username: string) => `/maker/${username}/todo`,
  makerDone: (username: string) => `/maker?username=${username}&tab=done`,
  asMakerDone: (username: string) => `/maker/${username}/done`,
  pendindToDo: "/todos?tab=pending",
  asPendindToDo: "/todos/pending",
  addProduct: "/new"
};
