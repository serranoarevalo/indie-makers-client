import App, { Container } from "next/app";
import React from "react";
import Router from "next/router";
import Header from "../components/header";
import { ThemeProvider } from "../typed-components";
import Modal from "../components/modal";
import JoinModal from "../components/joinModal";
import Footer from "../components/footer";

const theme = {
  greyColor: "#95a5a6",
  whiteColor: "white",
  yellowColor: "#FEF48B",
  redColor: "#E8674A",
  lightBlueColor: "#F2FEFE",
  darkBlueColor: "#DBE9F1",
  blackColor: "#34495e",
  maxWidth: "1400px",
  borderRadius: "5px",
  cardShadow: "box-shadow: 0px 0px 30px 0px rgba(219, 233, 241, 0.8);"
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
    const {
      Component,
      pageProps,
      router: { asPath }
    } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
            <Modal clickClose={this._goBack} showing={asPath === "/join"}>
              <JoinModal showing={asPath === "/join"} />
            </Modal>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }

  private _goBack = () => {
    if (
      document.referrer.indexOf(location.protocol + "//" + location.host) === 0
    ) {
      Router.back();
    } else {
      Router.push("/");
    }
  };
}
