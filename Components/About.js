import React from "react";

import Title from "./Title";
const About = () => {
  return (
    <>
      <Title
        title="About Section"
        description="Tell's the about section of nextjs Blog Website"
        name="about"
      />

      <div className="container">
        <h3 className="text-center">About Page Section </h3>
      </div>
    </>
  );
};

export default About;
