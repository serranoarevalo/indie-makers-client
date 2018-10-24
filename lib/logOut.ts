import Cookie from "js-cookie";

const logOut = () => {
  if (process.env.NODE_ENV === "production") {
    Cookie.remove("X-JWT", {
      domain: ".indiemakers.net"
    });
  } else {
    Cookie.remove("X-JWT", {
      domain: ".localtunnel.me"
    });
  }
  window.location.href = "/";
};
export default logOut;
