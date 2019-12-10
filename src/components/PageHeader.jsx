import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const PageHeader = () => (
  <Container className="page-header">
    <Row>
      <Col xs="8">
        <Image src="logo-wordmark.png" fluid />
      </Col>
      <Col />
    </Row>
  </Container>
);

export default PageHeader;
