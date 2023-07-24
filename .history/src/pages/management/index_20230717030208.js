import { useMemo } from "react";
import mockData from "~/mockApi/data.json";
const columns = [
  {
    name: "Name",
    dataIndex: "name",
    sortable: true,
  },
  {
    name: "Age",
    dataIndex: "age",
    sortable: true,
  },
];

const data = [
  {
    name: "John Doe",
    age: 30,
  },
  {
    name: "Jane Doe",
    age: 25,
  },
];

const ManagementPage = () => {
  //1. get all post paginations
  //2. show

  const data = useMemo(() => mockData, []);
  return <></>;
};

export default ManagementPage;
