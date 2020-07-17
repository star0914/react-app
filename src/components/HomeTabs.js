import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../styling/Tabs.scss";
import "../styling/Illustrations.scss"
import PortfolioTiles from '../components/PortfolioTiles';
import ExperienceCards from '../components/ExperienceCards';
import TableauLogo from '../components/TableauLogo';
import Certificate from '../components/Certificate';

import Work from "../components/json/Work";

function HomeTabs () {
  const json = Work
  return <div className="fluid-container" ID="tabs">
    <Tabs>
      <TabList>
        <Tab >Skills</Tab>
        <Tab >Portfolio</Tab>
        <Tab >Experience</Tab>
        <Tab >Education/Certificates</Tab>
      </TabList>
      <TabPanel>
        <div>
          <div className="skills-cell">
            <div className="react-logo">
              <div className="react-nucleus" />
              <div className="atom-orbit" ID="orbit-1" />
              <div className="atom-orbit" ID="orbit-2" />
              <div className="atom-orbit" ID="orbit-3" />
            </div>
            <h6 className="skill-desc">
              Front End Libraries/Frameworks (React, VueJS, Angular, etc.)
            </h6>
          </div>
          <div className="sass-logo skills-cell">
            <div className="react-logo">
              <div className="react-nucleus" />
              <div className="atom-orbit" ID="orbit-1" />
              <div className="atom-orbit" ID="orbit-2" />
              <div className="atom-orbit" ID="orbit-3" />
            </div>
            <h6 className="skill-desc">
              CSS Preprocessors (Sass/SCSS, LESS, etc.)
            </h6>
          </div>
          <div className="tableau-logo skills-cell">
            <TableauLogo />
            <h6 className="skill-desc">Tablo</h6>
          </div>
        </div>

      </TabPanel>
      <TabPanel>
        <PortfolioTiles />
      </TabPanel>
      <TabPanel>
        <p>
          noorul haram, shaheen immigration services, alm academy,
          gta car scrapper, express renovation, ellisdon, JLPD Enterprise
          rubbani's construction, kuehne+nagel, denny's, light speed staffing,
          ernest green&son, porter office services, fareed sheikh, instaclick,
          computer pros, autowashr (owner/operator), tubglaze.com
        </p>
        <ExperienceCards
          //{...json = json.computerpros.company}
          //company={json.map(w => ({w}))}
          //job={Work.computerpros.job.map(w => ({w}))}
          dates="March 2018 to March 2020"
        />
        <ExperienceCards
          company="Porter Office Services (Light Speed Staffing)"
          job="Junior Systems Installer/Technician"
          dates="May 2017 to February 2018"
        />
        <ExperienceCards
          company="JLPD Enterprise"
          job="Lead UI/UX Engineer"
          dates="January 2016 to December 2016"
        />
        <ExperienceCards
          company="EllisDon Corporation"
          job="Infrastructure Support Student"
          dates="August 2015 to December 2015"
        />
      </TabPanel>
      <TabPanel>
        <Certificate />
      </TabPanel>
    </Tabs>
  </div>
}

export default HomeTabs;
