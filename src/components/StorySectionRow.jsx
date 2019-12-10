import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import StoryPreview from "./StoryPreview";

const StorySectionRow = props => (
  <Row className="story-section-row">
    <Col className="story-preview">
      <StoryPreview storyIndex={props.startIndex} />
    </Col>
    <Col className="story-preview">
      <StoryPreview storyIndex={props.startIndex + 1} />
    </Col>
    <Col className="story-preview">
      <StoryPreview storyIndex={props.startIndex + 2} />
    </Col>
    <Col className="story-preview">
      <StoryPreview storyIndex={props.startIndex + 3} />
    </Col>
  </Row>
);

export default StorySectionRow;
