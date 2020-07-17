import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../styling/Tabs.scss";
import "../styling/Tableau.scss";

function TableauLogo () {
  return <div class="container">
    <div class="plus topmiddle small">
      <div class="bar darkerg horizontal"></div>
      <div class="bar darkerg vertical"></div>
    </div>
    <div class="plus central">
      <div class="bar darkero horizontal"></div>
      <div class="bar darkero vertical"></div>
    </div>
  </div>
}

export default TableauLogo;
