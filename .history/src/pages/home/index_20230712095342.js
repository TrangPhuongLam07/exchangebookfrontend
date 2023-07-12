import httpRequest from "~/utils/httpRequest";

const HomePage = () => {
  const fetchData = async () => {
    const res = await httpRequest.get("123");
    return res.data;
  };
  return (
    <div>
      HomePage
      <button onClick={fetchData}>hehe</button>
    </div>
  );
};

export default HomePage;
