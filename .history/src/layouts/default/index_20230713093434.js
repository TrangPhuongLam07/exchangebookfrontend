import Feed from "~/components/feed";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Feed />
      {children}
    </>
  );
};

export default DefaultLayout;
