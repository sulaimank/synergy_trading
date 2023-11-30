import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar } from "../../../node_modules/@mui/material/index";
import { Chip } from "../../../node_modules/@mui/material/index";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "Sep 09 23", 6.0, 24, 4.0),
  createData("Ice cream sandwich", "Oct 09 23", 9.0, 37, 4.3),
  createData("Eclair", "Jan 08 23", 16.0, 24, 6.0),
  createData("Cupcake", "Jan 08 23", 3.7, 67, 4.3),
  createData("Gingerbread", "Jan 08 23", 16.0, 49, 3.9),
  createData("Gingerbread", "Jan 08 23", 16.0, 49, 3.9),
  createData("Gingerbread", "Jan 08 23", 16.0, 49, 3.9),
];

export default function OrderList() {
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">${row.fat}</TableCell>
              <TableCell align="right">
                <Chip
                  variant="rounded"
                  label="Not Complete"
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: theme.palette.orange.light,
                    color: theme.palette.orange.dark,
                    ml: 2,
                  }}
                ></Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
