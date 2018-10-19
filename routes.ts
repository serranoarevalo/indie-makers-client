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
  editProfile: "/edit-profile",
  editProduct: (name: string) => `/edit-product?slug=${name}`,
  asEditProduct: (name: string) => `/edit-product/${name}`,
  blogDetail: (name: string) => `/review?slug=${name}`,
  asBlogDetail: (name: string) => `/review/${name}`,
  new: "/new",
  productDetail: (name: string) => {
    const formatted = name.toLowerCase().replace(" ", "-");
    return `/product?slug=${formatted}`;
  },
  asProductDetail: (name: string) => {
    const formatted = name.toLowerCase().replace(" ", "-");
    return `/product/${formatted}/`;
  },
  userDetail: (username: string) => `/maker?username=${username}`,
  asUserDetail: (username: string) => `/maker/${username}`,
  asProductsFn: (page: number, tab: string) =>
    `/products${tab !== "UPDATED" ? `/${tab.toLowerCase()}` : ""}${
      page === 0 ? "" : `?page=${page}`
    }`,
  asMakersFn: (page: number, tab: string) =>
    `/makers${tab !== "FIRE" ? `/${tab.toLowerCase()}` : ""}${
      page === 0 ? "" : `?page=${page}`
    }`,
  asToDosFn: (page: number, tab: string) =>
    `/todos${tab !== "COMPLETED" ? `/${tab.toLowerCase()}` : ""}${
      page === 0 ? "" : `?page=${page}`
    }`,
  productsFn: (page: number, tab: string) =>
    `/products?tab=${tab}&page=${page}`,
  makersFn: (page: number, tab: string) => `/makers?tab=${tab}&page=${page}`,
  makerToDo: (username: string) => `/maker?username=${username}&tab=todo`,
  asMakerToDo: (username: string) => `/maker/${username}/todo`,
  makerDone: (username: string) => `/maker?username=${username}&tab=done`,
  asMakerDone: (username: string) => `/maker/${username}/done`,
  toDosFn: (page: number, tab: string) => `/todos?tab=${tab}&page=${page}`,
  addProduct: "/new"
};
