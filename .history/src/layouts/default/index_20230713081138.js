import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
};

export default DefaultLayout;
