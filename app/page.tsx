"use client";

import Checkin from "./components/Checkin";
import Header from "./components/Header";
import ProjectTable from "./components/ProjectTable";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#292929",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          "&:hover": {
            backgroundColor: "#454444",
          },
        },
      },
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Checkin />
        <ProjectTable />
      </ThemeProvider>
    </>
  );
}
