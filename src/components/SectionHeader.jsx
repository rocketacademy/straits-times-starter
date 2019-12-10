import React from "react";

import Container from "react-bootstrap/Container";

const SectionHeader = props => (
  <Container className="d-flex space-between section-header">
    <span className="section-header-title">{props.headerText}</span>
    <span className="section-header-subtitle">
      {new Date().toDateString()} | {props.minTemp} / {props.maxTemp} | ST Index{" "}
      {props.stIndex}
    </span>
  </Container>
);

export default SectionHeader;
