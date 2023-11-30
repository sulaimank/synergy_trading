import React from "react";
import { Paper } from "../../node_modules/@mui/material/index";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Typography from "@mui/material/Typography";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Check from "../Images/tanku.gif";
import Row from "../../node_modules/react-bootstrap/esm/Row";
function ApplicationSub() {
  return (
    <Container
      style={{
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 500,
      }}
    >
      <Paper style={{ paddingBottom: 20 }}>
        <Row>
          <Row>
            <h2 style={{ paddingLeft: 30 }}>
              Your Application Has Been Submitted
            </h2>
          </Row>
          <Row>
            <p style={{ paddingLeft: "10%" }}>
              Someone from Our Team Will Reach out To You Soon <br></br>
            </p>
          </Row>
          <Row>
            <img src={Check} style={{ paddingLeft: 180, width: 320 }} />
          </Row>
        </Row>
      </Paper>
    </Container>
  );
}

export default ApplicationSub;
