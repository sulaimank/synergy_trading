import Sidebar from "../../components/MainFeed/Sidebar";
import Feed from "../../components/MainFeed/Feed";
import Rightbar from "../../components/MainFeed/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "../../components/MainFeed/Navbar";
import Add from "../../components/MainFeed/Add";
import { useState } from "react";

function MainDashboard() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"#171F2F"} color={"text.primary"}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default MainDashboard;
