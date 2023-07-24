import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
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

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const {
    getHeaderGroups,
    getRowModel,
    setPageIndex,
    getPageCount,
    nextPage,
    previousPage,
    getCanNextPage,
    getCanPreviousPage,
  } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting, globalFilter: filtering },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
  });
  const handleSearch = (e) => {
    setFiltering(e.target.value);
  };
  return (
    <TableContainer component={Paper}>
      <input type="text" onChange={handleSearch} />
      <Table sx={{ maxWidth: 1200, marginX: "auto" }}>
        <TableHead>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{ asc: "+", desc: "-" }[header.column.getIsSorted() ?? null]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <StyledTableRow onClick={() => console.log(123)} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
              <TableCell>test</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div className="">
        <button onClick={() => setPageIndex(0)}>First page</button>
        <button disabled={!getCanPreviousPage()} onClick={previousPage}>
          Previous page
        </button>
        <button disabled={!getCanNextPage()} onClick={nextPage}>
          Next page
        </button>
        <button onClick={() => setPageIndex(getPageCount() - 1)}>
          Last page
        </button>
      </div>
    </TableContainer>
  );
};

export default ManagementPage;
