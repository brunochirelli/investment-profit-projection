import React from "react";
import Menu from "./Menu";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
};

export default Layout;
