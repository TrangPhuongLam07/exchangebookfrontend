import httpRequest from "~/utils/httpRequest";

const HomePage = () => {
  httpRequest.get("123");
  return <div>HomePage</div>;
};

export default HomePage;
