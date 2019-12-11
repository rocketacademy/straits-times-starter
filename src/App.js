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
    {/* For Exercise 1, you may want to insert props in SectionHeader here */}
    <SectionHeader />
    <StorySection />
  </div>
);

export default App;
