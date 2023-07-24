import { flexRender, useReactTable } from "@tanstack/react-table";
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
  const { getHeaderGroups } = useReactTable({
    columns,
    data,
  });
  return (
    <table>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
      <tbody></tbody>
    </table>
  );
};

export default ManagementPage;
