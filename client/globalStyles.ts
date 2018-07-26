import { injectGlobal } from "styled-components";
import reset from "styled-reset";

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Karla:400,700|Open+Sans:400,600|Nunito:700");
  ${reset};
  body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color:#34495e;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
  }
  *{
    box-sizing:border-box;
  }
  a {
    color:inherit;
    text-decoration:none; 
  }
`;
