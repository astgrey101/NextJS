import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
      <Head>
          <title>HEHEH</title>
      </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
