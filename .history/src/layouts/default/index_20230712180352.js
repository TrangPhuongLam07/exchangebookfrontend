import Header from "~/components/header";
import { Container, Grid } from "@mui/material";

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Header />
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DefaultLayout;
