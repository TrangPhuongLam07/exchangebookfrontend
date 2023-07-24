import { useReactTable } from "@tanstack/react-table";
import mockData from "./mockApi/data.json";
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
  const queryKey = "users";

  const queryFn = async () => {
    const users = await fetch("/api/users");
    return users.json();
  };
  const [tableInstance, tableData] = useReactTable({
    columns,
    data,
  });

  console.log(mockData);
  return (
    <table>
      <thead>{tableInstance.getHeader()}</thead>
      <tbody>{tableData.map((row) => tableInstance.getRow(row))}</tbody>
    </table>
  );
};

export default ManagementPage;
