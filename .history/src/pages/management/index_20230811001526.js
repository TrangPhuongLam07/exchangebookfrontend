import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Tabs,
} from "@mui/material";
import { useEffect } from "react";
import { postService } from "~/services";
import { POST_STATUS } from "~/utils/constant";
const ManagementPage = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState(POST_STATUS.APPROVED);

  const [pagination, setPagination] = useState({
    size: 5,
    page: 1,
    status: POST_STATUS.APPROVED,
    previousPage: 0,
    nextPage: 1,
  });
  const handleSearch = () => {};
  const handleChangeValue = () => {};

  const fetchPosts = postService.getAllByMe(pagination).then((data) => {
    console.log(data);
  });

  useEffect(() => {
    fetchPosts();
  }, [pagination]);

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
              {/* {getHeaderGroups().map((headerGroup) => (
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
              ))} */}
            </TableHead>
            <TableBody>
              {/* {getRowModel().rows.map((row) => (
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
              ))} */}
            </TableBody>
          </Table>
          <div className="">
            <button>Previous page</button>
            <button>Next page</button>
          </div>
        </TableContainer>
      )}
    </>
  );
};

export default ManagementPage;
