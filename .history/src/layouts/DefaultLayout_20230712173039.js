import Header from "~/components/header";
const DefaultLayout = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
