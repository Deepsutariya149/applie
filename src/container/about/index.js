import React from "react";
import { aboutData } from "../../utiles/data";
function About() {
  return <div dangerouslySetInnerHTML={{ __html: aboutData.simpleText }}></div>;
}
export default About;
