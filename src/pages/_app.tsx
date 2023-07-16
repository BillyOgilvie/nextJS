import "../styles/globals.css";
import React from "react";
import classes from "./app.module.css";
import Layout from "@/components/layout/Layout";

interface Props {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <Layout>
      <div className={classes.app}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
};

export default MyApp;
