import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import React from "react";

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
