import { ReactNode } from "react";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <HelmetProvider>
      <div className="d-flex flex-column min-vh-100">
        <CustomNavbar />
        <main className="flex-grow-1" style={{ paddingTop: "80px" }}>
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
