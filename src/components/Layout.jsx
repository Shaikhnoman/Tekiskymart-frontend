import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <Outlet /> {/* Yeh dynamically har page ka content dikhayega */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
