import httpRequest from "~/utils/httpRequest";

const HomePage = () => {
  const a = httpRequest.get("123");
  return <div>HomePage</div>;
};

export default HomePage;
