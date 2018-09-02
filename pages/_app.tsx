import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import React from "react";
import Router from "next/router";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import Header from "../components/header";
import { ThemeProvider } from "../typed-components";
import Modal from "../components/modal";
import JoinModal from "../components/joinModal";
import Footer from "../components/footer";
import withApollo from "../lib/withApollo";

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

class MyApp extends App<any> {
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
      router: { asPath },
      apollo
    } = this.props;
    return (
      <Container>
        <NProgressStyles color={theme.blackColor} spinner={false} />
        <ApolloProvider client={apollo}>
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
        </ApolloProvider>
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

export default withNProgress()(withApollo(MyApp));
