import Cookie from "js-cookie";

const logIn = (token: string) => {
  if (process.env.NODE_ENV === "production") {
    Cookie.set("X-JWT", token, {
      domain: ".indiemakers.net"
    });
  } else {
    Cookie.set("X-JWT", token, {
      domain: ".localtunnel.me"
    });
    Cookie.set("X-JWT", token, {
      domain: "127.0.0.1"
    });
  }
  setTimeout(() => (window.location.href = "/"), 2000);
};
export default logIn;
