export default {
  home: "/",
  join: "?join",
  asJoin: "/join",
  login: "/login",
  products: "/products",
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
  asUserDetail: (username: string) => `/maker/${username}`
};
