import React from "react";
import { Dropdown } from "react-bootstrap";
import i18n from "./i18n";

function changeLanguage(ln) {
  return () => {
    i18n.changeLanguage(ln);
  };
}
function Drop() {
  return (
    <div>
      <Dropdown style={{ marginRight: 30 }}>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Languages
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={changeLanguage("en")}>English</Dropdown.Item>
          <Dropdown.Item onClick={changeLanguage("jp")}>Japanese</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Drop;
