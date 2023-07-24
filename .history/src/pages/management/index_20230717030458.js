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
  const columns = useMemeo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Title",
      accessor: "id",
    },
    {
      Header: "Author",
      accessor: "id",
    },
    {
      Header: "description",
      accessor: "id",
    },
    {
      Header: "Image",
      accessor: "id",
    },
    {
      Header: "Category",
      accessor: "id",
    },
  ]);
  return <></>;
};

export default ManagementPage;
