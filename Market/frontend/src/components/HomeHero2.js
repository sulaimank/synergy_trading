import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Container from "../screens/Container";

const HomeHero2 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box data-aos={isMd ? "fade-right" : "fade-up"}>
      <Box marginBottom={2}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Synergy - We make trading {" "}
        </Typography>
        <Typography
          color={"#2371C8"}
          component={"span"}
          variant="h2"
          fontWeight={700}
          sx={{
            background: `linear-gradient(180deg, transparent 82%, ${alpha(
              theme.palette.info.light,
              0.3
            )} 0%)`,
          }}
        >
          Easy
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="black">
          Forward thinking businesses use our cloud backup service to ensure
          data reliability and safety.
        </Typography>
      </Box>

      <Button
        href="/signin"
        variant="contained"
        style={{ backgroundColor: "#1C6AC6" }}
        size="large"
      >
        Get started
      </Button>
    </Box>
  );

  const RightSide = () => {
    return (
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
            "https://images.pexels.com/photos/2529179/pexels-photo-2529179.jpeg?cs=srgb&dl=pexels-guillaume-meurice-2529179.jpg&fm=jpg"
          }
          height={{ xs: "auto", md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  };

  return (
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
          minHeight={{ md: 600 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={"flex"}
            alignItems={"center"}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
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
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default HomeHero2;
