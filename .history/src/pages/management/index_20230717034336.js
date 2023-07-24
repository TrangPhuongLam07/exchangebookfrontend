import { useReactTable } from "@tanstack/react-table";
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
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Author",
      accessor: "author",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Image",
      accessor: "image",
    },
  ]);
  const table = useReactTable({
    columns,
    data,
  });
  console.log(table);
  return <></>;
};

export default ManagementPage;
