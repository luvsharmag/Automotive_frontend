import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex-grow container mx-auto flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
