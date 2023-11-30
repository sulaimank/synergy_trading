import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Headline = () => {
  return (
    <Box style={{ backgroundColor: "#E6F3FF" }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: "medium",
          color: "black",
        }}
        gutterBottom
        color={"textSecondary"}
        align={"center"}
      >
        F.A.Q.
      </Typography>
      <Typography
        variant="h2"
        align={"center"}
        sx={{ color: "black" }}
        fontWeight={700}
        gutterBottom
      >
        Have a question?
      </Typography>
      <Typography
        variant="h6"
        align={"center"}
        sx={{ color: "black" }}
        color={"textSecondary"}
      >
        Search our FAQ for answers to anything you might ask.
      </Typography>
    </Box>
  );
};

export default Headline;
