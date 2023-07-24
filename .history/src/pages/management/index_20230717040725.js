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
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Author",
      accessorKey: "author",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Image",
      accessorKey: "image",
    },
  ]);
  const {
    getHeaderGroups,
    getRowModel,
    getCoreRowModel: getCoreRowModel,
  } = useReactTable({
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
      <tbody>
        {getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, ceil.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManagementPage;
