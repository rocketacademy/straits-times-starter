import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import StoryPreview from "./StoryPreview";
import StorySectionRow from "./StorySectionRow";
import storyData from "../story-data.json";

const StorySection = () => (
  <Container style={{ whiteSpace: "pre-wrap" }}>
    <Row className="story-section-row">
      <Col md="9" className="story-preview">
        <Card border="light" text="white" className="title-story">
          <Card.Img src={storyData[0].imgSrc} />
          <Card.Body className="story-preview-body">
            <Card.Title className="title-story-title">
              {storyData[0].title}
            </Card.Title>
            <Card.Text>{storyData[0].subtitle}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="3" className="story-preview">
        <StoryPreview storyIndex={1} />
      </Col>
    </Row>
    <StorySectionRow startIndex={2} />
    <StorySectionRow startIndex={6} />
    <StorySectionRow startIndex={10} />
  </Container>
);

export default StorySection;
