export default {
  home: "/",
  join: "?join",
  asJoin: "/join",
  login: "/login",
  makers: "/makers",
  about: "/about",
  blog: "/blog",
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
  todos: "/to-dos",
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
  asMakersAll: "/makers/all"
};
