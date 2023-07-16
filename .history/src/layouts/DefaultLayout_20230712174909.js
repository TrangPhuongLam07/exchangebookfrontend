import Header from "~/components/header";
const DefaultLayout = ({ children }) => {
  console.log("default layout");
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
