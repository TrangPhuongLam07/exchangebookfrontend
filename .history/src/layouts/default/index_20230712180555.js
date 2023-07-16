import Header from "~/components/header";
import { Container, Grid, AppBar } from "@mui/material";

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default DefaultLayout;
