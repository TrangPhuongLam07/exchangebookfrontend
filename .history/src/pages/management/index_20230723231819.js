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
      id: "id",
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
      id: "image",
      header: "image",
      accessorKey: "image.data",
      cell: ({ row }) => {
        return (
          <img src={"data:image/*;base64," + row.getValue("image")} alt="" />
        );
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
      header: "Edit",
      cell: ({ row }) => {
        return (
          <Button
            variant="outlined"
            color="warning"
            type="submit"
            onClick={() =>
              navigate(`/update/${row.getValue("id")}`, { replace: true })
            }
          >
            Edit
          </Button>
        );
      },
    },
    {
      header: "Remove",
      cell: ({ row }) => {
        return (
          <Button
            variant="contained"
            color="error"
            onClick={() => console.log("remove")}
          >
            Remove
          </Button>
        );
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
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
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
