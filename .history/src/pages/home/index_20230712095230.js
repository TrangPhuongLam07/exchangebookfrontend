import httpRequest from "~/utils/httpRequest";

const HomePage = () => {
  const a = httpRequest.get("123");
  console.log(a);
  return <div>HomePage</div>;
};

export default HomePage;
