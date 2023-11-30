import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import { Divider } from "../../node_modules/@mui/material/index";
const MeetTeam = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"black"}
          align={"center"}
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant={"h4"} align={"center"}>
          Trust the professionals
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            name: "Marco Bogani",
            title: "CEO at Synergy",
            avatar: "https://assets.maccarianagency.com/avatars/img3.jpg",
          },
          {
            name: "Sulaiman Karmali",
            title: "CTO",
            avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
          },
          {
            name: "Daman Sawhney",
            title: "CFO",
            avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
          },
          {
            name: "William Harris",
            title: "President & VP",
            avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            data-aos={"fade-up"}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Card
              sx={{
                boxShadow: 0,
                background: "transparent",
                backgroundImage: "none",
              }}
            >
              <Box
                component={CardMedia}
                borderRadius={2}
                width={1}
                height={1}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={"transparent"}
                marginTop={-5}
              >
                <Box component={Card} style={{ backgroundColor: "#2673C9" }}>
                  <CardContent>
                    <ListItemText
                      style={{ color: "white" }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeetTeam;
