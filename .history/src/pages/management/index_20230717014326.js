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
  return <div>ManagementPage</div>;
};

export default ManagementPage;
