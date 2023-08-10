import {
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
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
import { useNavigate } from "react-router-dom";
import ActionLabel from "~/components/label/action-label";
import StatusLabel from "~/components/label/status-label";
import { postService } from "~/services";
import { formatDate } from "~/utils";
import { POST_STATUS } from "~/utils/constant";
const ManagementPage = () => {
  const [value, setValue] = useState(POST_STATUS.APPROVED);
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["me/posts", value],
    () => postService.getAllByMe(value)
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
    // {
    //   header: "Author",
    //   accessorKey: "author",
    // },
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
          <img
            src={"data:image/*;base64," + row.getValue("image")}
            alt=""
            width={200}
            height={40}
          />
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
      id: "status",
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => {
        return <StatusLabel status={row.getValue("status")} />;
      },
      // accessorKey: "status",
    },
    {
      header: "action",
      cell: ({ row }) => {
        return <ActionLabel status={row.getValue("status")} />;
      },
      // accessorKey: "status",
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
  ]);

  const navigate = useNavigate();

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

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

  const handleChangeValue = (e, value) => {
    console.log(e, value);
    setValue(value);
  };
  // style
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));
  if (isLoading) return <>Loading</>;

  // if (isError || totalItems < 1) return <i>Trống</i>;

  if (isSuccess)
    return (
      <>
        <Tabs
          value={value}
          onChange={handleChangeValue}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs"
        >
          <Tab value={POST_STATUS.APPROVED} label="Tin đã duyệt" />
          <Tab value={POST_STATUS.CREATED_PENDING} label="Đang chờ duyệt" />
        </Tabs>
        {value === POST_STATUS.APPROVED && (
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
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
        )}
        {value === POST_STATUS.CREATED_PENDING && (
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
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
        )}
      </>
    );
};

export default ManagementPage;
