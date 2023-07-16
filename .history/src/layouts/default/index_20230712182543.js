import Header from "~/components/header";
import { Container, Grid, AppBar, Box, Stack } from "@mui/material";

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default DefaultLayout;
