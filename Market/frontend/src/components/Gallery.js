import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";

const Gallery = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: "https://images.pexels.com/photos/1164975/pexels-photo-1164975.jpeg?cs=srgb&dl=pexels-luis-gallegos-alvarez-1164975.jpg&fm=jpg",
      source:
        "https://images.pexels.com/photos/1164975/pexels-photo-1164975.jpeg?cs=srgb&dl=pexels-luis-gallegos-alvarez-1164975.jpg&fm=jpg",
      rows: 2,
      cols: 1,
    },
    {
      src: "https://images.pexels.com/photos/805310/pexels-photo-805310.jpeg?cs=srgb&dl=pexels-jodie-louise-805310.jpg&fm=jpg",
      source:
        "https://images.pexels.com/photos/805310/pexels-photo-805310.jpeg?cs=srgb&dl=pexels-jodie-louise-805310.jpg&fm=jpg",
      rows: 1,
      cols: 2,
    },
    {
      src: "https://images.pexels.com/photos/4880423/pexels-photo-4880423.jpeg?cs=srgb&dl=pexels-cottonbro-4880423.jpg&fm=jpg",
      source:
        "https://images.pexels.com/photos/4880423/pexels-photo-4880423.jpeg?cs=srgb&dl=pexels-cottonbro-4880423.jpg&fm=jpg",
      rows: 1,
      cols: 1,
    },
    {
      src: "https://images.pexels.com/photos/4571275/pexels-photo-4571275.jpeg?cs=srgb&dl=pexels-cottonbro-4571275.jpg&fm=jpg",
      source:
        "https://images.pexels.com/photos/4571275/pexels-photo-4571275.jpeg?cs=srgb&dl=pexels-cottonbro-4571275.jpg&fm=jpg",
      rows: 1,
      cols: 1,
    },
    {
      src: "https://images.pexels.com/photos/2895450/pexels-photo-2895450.jpeg?cs=srgb&dl=pexels-jerm-gonzalo-2895450.jpg&fm=jpg",
      source:
        "https://images.pexels.com/photos/2895450/pexels-photo-2895450.jpeg?cs=srgb&dl=pexels-jerm-gonzalo-2895450.jpg&fm=jpg",
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
          }}
          gutterBottom
          color={"text.secondary"}
          align={"center"}
        >
          Gallery
        </Typography>
        <Typography
          variant="h4"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Small team. Big hearts.
        </Typography>
        <Typography variant="h6" align={"center"} color={"text.secondary"}>
          Our focus is always on finding the best people to work with. Our bar
          is high, but you look ready to take on the challenge.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} marginBottom={2}></Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >
              <LazyLoadImage
                height={"100%"}
                width={"100%"}
                src={item.src}
                alt="..."
                effect="blur"
                style={{
                  objectFit: "cover",
                  filter:
                    theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                  cursor: "poiner",
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Gallery;
