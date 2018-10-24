import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import Router from "next/router";
import withGA from "next-ga";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { parseCookies } from "nookies";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import Header from "../components/header";
import { ThemeProvider } from "../typed-components";
import Footer from "../components/footer";
import withApollo from "../lib/withApollo";
import WithUser from "../lib/withUser";

const theme = {
  greyColor: "#545e5f",
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
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let isLoggedIn = false;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const cookies = parseCookies(ctx);

    if (cookies["X-JWT"] !== null && cookies["X-JWT"] !== undefined) {
      isLoggedIn = true;
    }

    return { pageProps, isLoggedIn };
  }

  render() {
    const { Component, pageProps, apollo, isLoggedIn } = this.props;
    return (
      <Container>
        <NProgressStyles color={theme.blackColor} spinner={false} />
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <WithUser isLoggedIn={isLoggedIn}>
                <Header isLoggedIn={isLoggedIn} />
              </WithUser>
              <main>
                <WithUser isLoggedIn={isLoggedIn}>
                  <Component {...pageProps} isLoggedIn={isLoggedIn} />
                </WithUser>
              </main>
              <Footer />
              <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
            </React.Fragment>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withNProgress()(
  withApollo(withGA("UA-123061558-2", Router)(MyApp))
);
