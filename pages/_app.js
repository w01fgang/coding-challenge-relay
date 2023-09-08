// @flow
import React, { Suspense } from "react";
import App from "next/app";
import Head from "next/head";
import { QueryRenderer } from "react-relay";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import type {
  NextComponentType,
  NextPageContext,
} from "next/next-server/lib/utils"; //eslint-disable-line
import "../style/global-style.scss";

import theme from "../lib/theme";
import { initEnvironment, createEnvironment } from "../lib/createEnvironment";
import MainContainer from "../components/MainContainer";

if (!Intl.PluralRules) {
  /* eslint-disable global-require */
  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/locale-data/en");
  require("@formatjs/intl-pluralrules/locale-data/ru");
  require("@formatjs/intl-pluralrules/locale-data/it");
  /* eslint-enable */
}

const cache = createIntlCache();

type InitialProps = {
  Component: NextComponentType<NextPageContext, $FlowFixMe, $FlowFixMe>,
  pageProps: $FlowFixMe,
  locale: string,
  messages: { [key: string]: string },
  relayData: $FlowFixMe,
  token: string,
  records: $FlowFixMe,
};

type Props = {
  Component: NextComponentType<NextPageContext, $FlowFixMe, $FlowFixMe>,
  ctx: $FlowFixMe,
};

export default class MyApp extends App<InitialProps> {
  static async getInitialProps({ Component, ctx }: Props): $FlowFixMe {
    let pageProps = {};
    // $FlowFixMe[prop-missing]
    if (Component.getInitialProps) {
      // $FlowFixMe[not-a-function]
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    let locale = "en";
    let messages = {};
    if (req) {
      // $FlowFixMe
      const getLang = require("../lib/getLang").default; // eslint-disable-line global-require
      ({ locale, messages } = getLang(req));
    } else if (typeof window !== "undefined") {
      ({ locale, messages } = window.__NEXT_DATA__.props); // eslint-disable-line no-underscore-dangle
    }

    return { pageProps, locale, messages };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      if (jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): React$Node {
    const {
      // $FlowFixMe[incompatible-use]
      Component,
      pageProps,
      locale,
      messages,
      relayData,
      token,
      records,
    } = this.props;
    const intl = createIntl(
      {
        locale,
        messages,
      },
      cache
    );

    if (!Component.query) {
      return <Component {...pageProps} locale={locale} />;
    }

    const environment = createEnvironment(
      {
        relayData,
        records,
      },
      JSON.stringify({
        queryID: Component.query.params.name,
        variables: pageProps.variables || {},
      })
    );

    return (
      <RawIntlProvider value={intl}>
        <Head>
          <meta charSet="utf-8" />
          <title>Products</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryRenderer
            environment={environment}
            query={Component.query}
            variables={pageProps.variables}
            render={(params) => {
              const { error, props } = params;
              if (props && props.viewer) {
                return (
                  <Suspense fallback={null}>
                    <Component
                      {...pageProps}
                      environment={environment}
                      {...props}
                      locale={locale}
                    />
                  </Suspense>
                );
              }

              if (error) {
                return "Error!";
              }
              return "Loading...";
            }}
          />
        </ThemeProvider>
      </RawIntlProvider>
    );
  }
}
