import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
