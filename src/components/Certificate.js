import React from 'react';
import { Card } from 'react-bootstrap';
import "../styling/Tabs.scss";
import "../styling/Certificate.scss";

//import JobDesc from "../components/json/JobDesc";

function Certificate (props) {
  return <div>
    <div className="certificate">
      <h2>Microsoft Technology Associate</h2>
      <h4>Software Development Fundamentals</h4>
      <h6>Received May 2019</h6>
      <ul>
        <li>y</li>// TODO:
      </ul>
    </div>
    <div className="certificate">
      <h2>Sheridan College</h2>
      <h4>Software Development Advanced Diploma</h4>
      <h6>Graduated December 2016</h6>
      <ul>
        <li>y</li>
      </ul>
    </div>
  </div>
}

export default Certificate;
