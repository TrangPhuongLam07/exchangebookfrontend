import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { postService } from "~/services";
import { formatDate } from "~/utils";
const ManagementPage = () => {
  const query = useQueryClient();
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["me/posts"],
    postService.getAllByMe
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
          <Box sx={{ width: 50, height: 50, overflow: hidden }}>
            <img src={row.getValue("image")} alt="" />
          </Box>
        );
      },
    },
    {
      id: "dateCreated",
      header: "Date created",
      accessorKey: "dateCreated",
      cell: ({ row }) => {
        return (
          <Typography>{formatDate(row.getValue("dateCreated"))}</Typography>
        );
      },
    },
    {
      id: "datePosted",
      header: "Date posted",
      accessorKey: "datePosted",
      cell: ({ row }) => {
        return (
          <Typography>{formatDate(row.getValue("datePosted"))}</Typography>
        );
      },
    },
    {
      id: "dateUpdated",
      header: "Date updated",
      accessorKey: "dateUpdated",
      cell: ({ row }) => {
        return (
          <Typography>{formatDate(row.getValue("dateUpdated"))}</Typography>
        );
      },
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
            onClick={() =>
              navigate(`/management/update/${row.getValue("id")}`, {
                replace: true,
              })
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
            onClick={() => deletePostMutation.mutate(row.getValue("id"))}
          >
            Remove
          </Button>
        );
      },
    },
  ]);

  const navigate = useNavigate();

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const deletePostMutation = useMutation({
    mutationFn: (id) => postService.deleteOne(id),
    onSuccess: () => {
      toast.success("An bai viet thanh cong");
      query.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
  const { postsResponses, totalItems, totalPages } = data?.data || [];
  const handleSearch = (e) => {
    setFiltering(e.target.value);
  };
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
    data: postsResponses || [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting, globalFilter: filtering },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
  });

  // style
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));
  if (isLoading) return <>Loading</>;

  if (isError || totalItems < 1) return <i>Trống</i>;

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
