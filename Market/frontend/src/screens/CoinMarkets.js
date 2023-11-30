import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Cookies from "js-cookie";
import { BiSearchAlt2 } from "react-icons/bi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import SvgIcon from "@mui/material/SvgIcon";
import { useTheme } from "@mui/material/styles";

import TablePaginationActions from "./TablePaginationActions";
import { Typography } from "../../node_modules/@mui/material/index";

const CoinMarkets = () => {
  const theme = useTheme();

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchCoinMarkets = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  };
  const firstNameCookie = Cookies.get("firstName");
  useEffect(() => {
    fetchCoinMarkets();
  }, []);

  return (
    <React.Fragment>
      <Card>
        <Box style={{ paddingLeft: 10 }}>
          <Typography variant="h6" gutterBottom>
            Hello, {firstNameCookie || "Guest"}
          </Typography>
          <Box sx={{ mt: 3, mr: 4 }}>
            <Box sx={{ mr: 4 }}>
              <TextField
                variant="filled"
                fullWidth
                sx={{
                  input: {
                    color: "black",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="black">
                        <BiSearchAlt2 style={{ color: "black" }} />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search a cryptocurrency"
                onChange={handleChange}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Box sx={{ minWidth: 1050, pb: 3 }}>
            <Table style={{ color: "black" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                    Image
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                    Symbol
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "black" }}>
                    24h
                  </TableCell>
                  {/* <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Volume
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Market Cap
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredCoins.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filteredCoins
                ).map((coin) => (
                  <TableRow hover key={coin.id}>
                    <TableCell>
                      <img
                        src={coin.image}
                        alt=""
                        style={{ height: "30px", width: "30px" }}
                      />
                    </TableCell>
                    <TableCell style={{ color: "black" }}>
                      {coin.name}
                    </TableCell>
                    <TableCell style={{ color: "black" }}>
                      {coin.symbol}
                    </TableCell>
                    <TableCell style={{ color: "black" }}>
                      ${coin.current_price.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      {coin.price_change_percentage_24h > 0 ? (
                        <span
                          style={{
                            color:
                              theme.palette.mode === "dark"
                                ? theme.palette.success.main
                                : theme.palette.success.dark,
                          }}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      ) : (
                        <span
                          style={{
                            color:
                              theme.palette.mode === "dark"
                                ? theme.palette.error.main
                                : theme.palette.error.dark,
                          }}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      )}
                    </TableCell>
                    {/* <TableCell>${coin.total_volume.toLocaleString()}</TableCell>
                    <TableCell>${coin.market_cap.toLocaleString()}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              style={{ color: "white" }}
              rowsPerPageOptions={[]}
              colSpan={3}
              count={coins.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
              sx={{ display: "flex", justifyContent: "center" }}
            />
          </Box>
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default CoinMarkets;
