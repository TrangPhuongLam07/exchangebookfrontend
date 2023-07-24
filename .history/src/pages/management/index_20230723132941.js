import {
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postService } from "~/services";

const ManagementPage = () => {
  const { data, isLoading, isSuccess } = useQuery(["posts"], async () =>
    postService.getAll()
  );
  // column defs
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
      accessorKey: "category.id",
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
      header: () => <div>Image</div>,
      accessorKey: "image.data",
      cell: ({ row }) => {
        console.log(row.getValue("image.data"));
        // return (
        //   <img
        //     src={`data:image/*;base64${rowData.image.data}`}
        //     alt=""
        //     width="100"
        //     height="100"
        //   />
        // );
      },
    },
    {
      header: "Date created",
      accessorKey: "dateCreated",
    },
    {
      header: "Date posted",
      accessorKey: "datePosted",
    },
    {
      header: "Date updated",
      accessorKey: "dateUpdated",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      key: "edit",
      header: "Edit",
      accessorFn: (rowData) => {
        return <button onClick={() => alert("Edit")}>Edit</button>;
      },
    },
    {
      key: "remove",
      header: "Remove",
      accessorFn: (rowData) => {
        return <button onClick={() => alert("Remove")}>Remove</button>;
      },
    },
  ]);
  // style
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
    data: data?.postsResponses,
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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (isLoading) {
    return <>Loading</>;
  }
  console.log(columns.map((column) => column.id));

  if (isSuccess)
    return (
      <TableContainer component={Paper}>
        <input type="text" onChange={handleSearch} />
        <Table sx={{ maxWidth: 1200, marginX: "auto" }}>
          <TableHead>
            {getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    colSpan={header.colSpan}
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    {
                      { asc: "+", desc: "-" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {getRowModel().rows.map((row) => (
              <StyledTableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
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
