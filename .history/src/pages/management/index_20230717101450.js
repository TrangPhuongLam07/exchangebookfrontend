import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import mockData from "~/mockApi/data.json";

const ManagementPage = () => {
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
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManagementPage;
