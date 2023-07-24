import { useTable } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
const columns = [
  {
    id: "name",
    label: "Name",
    width: 200,
  },
  {
    id: "age",
    label: "Age",
    width: 100,
  },
  {
    id: "email",
    label: "Email",
    width: 200,
  },
];

const data = [
  {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  },
  {
    name: "Jane Doe",
    age: 25,
    email: "janedoe@example.com",
  },
  {
    name: "Peter Smith",
    age: 40,
    email: "petersmith@example.com",
  },
];
const ManagementPage = () => {
  //1. get all post paginations
  //2. show
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id}>{column.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <TableCell key={column.id}>{row[column.id]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Table>
  );
};

export default ManagementPage;
