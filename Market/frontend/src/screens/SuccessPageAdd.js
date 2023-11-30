import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ShortFooter from "../components/ShortFooter";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "./Container";

const SuccessPageAdd = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div>
      <Box
        sx={{
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            position={"relative"}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display={"flex"}
              alignItems={"center"}
            >
              <Container>
                <Box>
                  <Typography
                    variant="h2"
                    component={"h2"}
                    color="text.secondary"
                    align={isMd ? "left" : "center"}
                    sx={{ fontWeight: 700 }}
                  >
                    Congratulations
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    color="text.secondary"
                    align={isMd ? "left" : "center"}
                  >
                    Your Product has been added
                    <br />
                  </Typography>
                  <Box
                    marginTop={4}
                    display={"flex"}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                  >
                    <Button
                      style={{ backgroundColor: "#46A4DA" }}
                      component={Link}
                      variant="contained"
                      size="large"
                      href={"/home"}
                    >
                      Back home
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: "0 0 100%", md: "0 0 50%" },
                position: "relative",
                maxWidth: { xs: "100%", md: "50%" },
                order: { xs: 1, md: 2 },
                minHeight: { xs: "auto", md: "calc(100vh - 58px)" },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: "50vw" },
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      overflow: "hidden",
                      left: "0%",
                      width: 1,
                      height: 1,
                      position: { xs: "relative", md: "absolute" },
                      clipPath: {
                        xs: "none",
                        md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                      },
                      shapeOutside: {
                        xs: "none",
                        md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: "auto", md: 1 },
                        "& img": {
                          objectFit: "cover",
                        },
                        "& .lazy-load-image-loaded": {
                          height: 1,
                          width: 1,
                        },
                      }}
                    >
                      <Box
                        component={LazyLoadImage}
                        effect="blur"
                        src={
                          "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        height={{ xs: "auto", md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                        sx={{
                          filter:
                            theme.palette.mode === "dark"
                              ? "brightness(0.7)"
                              : "none",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <ShortFooter />
    </div>
  );
};

export default SuccessPageAdd;
