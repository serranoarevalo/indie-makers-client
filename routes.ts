export default {
  home: "/",
  join: "?join",
  asJoin: "/join",
  login: "/login",
  makers: "/makers",
  about: "/about",
  blog: "/reviews",
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
  todos: "/todos",
  productsLaunched: "/products?tab=launched",
  asProductsLaunched: "/products/launched",
  products: "/products",
  productsHelp: "/products?tab=help",
  asProductsHelp: "/products/help",
  productsFeatured: "/products?tab=featured",
  asProductsFeatured: "/products/featured",
  makersSerial: "/makers?tab=serial",
  asMakersSerial: "/makers/serial",
  makersAll: "/makers?tab=all",
  asMakersAll: "/makers/all",
  makerToDo: (username: string) => `/maker?username=${username}&tab=todo`,
  asMakerToDo: (username: string) => `/maker/${username}/todo`,
  makerDone: (username: string) => `/maker?username=${username}&tab=done`,
  asMakerDone: (username: string) => `/maker/${username}/done`,
  pendindToDo: "/todos?tab=pending",
  asPendindToDo: "/todos/pending",
  addProduct: "/new"
};
