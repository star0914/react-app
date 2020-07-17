import React from 'react';
import { Card } from 'react-bootstrap';
import "../styling/Tabs.scss";

import JobDesc from "../components/json/JobDesc";

function ExperienceCards (props) {
  return <div>
    <div>
      <h4>{props.company}</h4>
      <h5>{props.job}</h5>
      <i>{props.dates}</i>
      <ul>
        {JobDesc.computerpros.map(s => (<li>{s}</li>))}
      </ul>
    </div>
  </div>
}

function countPoints (point) {
  //TODO: possibly implement later...
  return point;
}

export default ExperienceCards;
