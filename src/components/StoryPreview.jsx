import React from "react";
import Card from "react-bootstrap/Card";

import storyData from "../story-data.json";

const StoryPreview = props => {
  if (props.storyIndex >= storyData.length) {
    return <Card border="light" />;
  }
  return (
    <Card border="light">
      <Card.Img src={storyData[props.storyIndex].imgSrc} />
      <Card.Body className="story-preview-body">
        <Card.Text>{storyData[props.storyIndex].title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StoryPreview;
