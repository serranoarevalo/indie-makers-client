export default {
  home: "/",
  join: "/join",
  login: "/login",
  products: "/products",
  makers: "/makers",
  about: "/about",
  blog: "/blog",
  new: "/new",
  productDetail: (name: string) => {
    const formatted = name.toLowerCase().replace(" ", "-");
    return `/product/${formatted}`;
  },
  userDetail: (name: string) => `/user/${name}`
};
