import * as httpRequest from "~/utils/httpRequest";

const HomePage = async () => {
  const a = await httpRequest.get("123");
  console.log(a);
  return <div>HomePage</div>;
};

export default HomePage;
