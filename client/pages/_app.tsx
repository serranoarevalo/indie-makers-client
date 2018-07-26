import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "../typed-components";
import Header from "../components/header";

const theme = {
  greyColor: "#bdc3c7",
  whiteColor: "white",
  yellowColor: "#FEF48B",
  redColor: "#E8674A",
  lightBlueColor: "#F2FEFE",
  darkBlueColor: "#DBE9F1",
  blackColor: "#34495e",
  maxWidth: "1200px",
  borderRadius: "5px"
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Header />
            <Component {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
