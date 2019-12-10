import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import PageHeader from "./components/PageHeader";
import SectionHeader from "./components/SectionHeader";
import StorySection from "./components/StorySection";

const App = () => (
  <div className="page-div">
    <br />
    <PageHeader />
    <NavigationBar />
    <br />
    <SectionHeader
      headerText="TOP STORIES"
      minTemp="29°C"
      maxTemp="23°C"
      stIndex="3,178.840"
    />
    <StorySection />
  </div>
);

export default App;
