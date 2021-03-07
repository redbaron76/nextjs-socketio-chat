import "../styles/theme.css";
import GlobalStyles from "src/components/GlobalStyles";

import { NextPage } from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
