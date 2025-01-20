import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';

import './App.css';

class App extends Component {

  render() {
    return(
      <main className="main" role="main">
        <nav className="navbar navbar-expand-sm">
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} size="sm"/>
          </button>
          <div id="navCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item px-2 ml-auto">
                <a className="nav-link active light-a scrollable" href="#about">01. About</a>
              </li>
              <li className="nav-item px-2 ml-auto">
                <a className="nav-link light-a scrollable" href="#work">02. Work</a>
              </li>
              <li className="nav-item px-2 ml-auto">
                <a className="nav-link light-a scrollable" href="#contact">03. Contact</a>
              </li>
              <li className="nav-item px-2 ml-auto">
                <a className="nav-link light-a" href="https://github.com/jdoiron94" target="_blank" rel="noopener noreferrer">04. Projects</a>
              </li>
              <li className="nav-item px-2 ml-auto">
                <a className="nav-link light-a" href="Jacob Doiron - Senior Software Engineer 2025 Resume.pdf" target="_blank" rel="noopener noreferrer">05. Resume</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container light-bg">
          <div className="offset-lg-1 col-lg-9 mt-lg mb-lg">
            <div>Hi, my name is</div>
            <h1>Jacob Doiron.</h1>
            <p className="mt-4">I am currently employed by <a className="light-a" href="https://dzone.com" target="_blank" rel="noopener noreferrer">DZone</a> as a <span>Senior Software Engineer</span> and I enjoy building systems.</p>
          </div>
        </div>
        <div id="about" className="dark-bg pt-sm pb-lg">
          <div className="container">
            <div className="offset-lg-1 col-lg-9">
              <h1 className="light-text mb-sm">01. About me</h1>
              <p>I'm a Software Engineer who enjoys working on project architecture and implementation, with an emphasis on scoping and timely delivery. I graduated from St. Mary's College of Maryland in the spring of 2016 and have been developing professionally since.</p>
              <p>Here are some languages and frameworks I'm familiar with:</p>
              <div>
                <ul className="split-ul">
                  <li className="split-li">Java</li>
                  <li className="split-li">Node.js</li>
                  <li className="split-li">Python</li>
                  <li className="split-li">HTML</li>
                  <li className="split-li">JavaScript</li>
                  <li className="split-li">CSS</li>
                </ul>
              </div>
              <p>Here are some additional supporting technologies I've used:</p>
              <div>
                <ul className="split-ul">
                  <li className="split-li">Spring</li>
                  <li className="split-li">Hibernate</li>
                  <li className="split-li">Freemarker</li>
                  <li className="split-li">Thymeleaf</li>
                  <li className="split-li">Gradle</li>
                  <li className="split-li">REST</li>
                  <li className="split-li">MySQL</li>
                  <li className="split-li">PostgreSQL</li>
                  <li className="split-li">Microsoft SQL Server</li>
                  <li className="split-li">AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="work" className="light-bg pt-sm">
          <div className="container">
            <div className="offset-lg-1 col-lg-9 mb-lg">
              <h1 className="mb-sm">02. Experience</h1>
              <div className="row">
                <div className="col-md-4 col-lg-3">
                  <div id="listTab" className="list-group" role="tablist">
                    <a className="list-group-item list-group-item-action active" data-toggle="list" href="#dzone" role="tab">DZone</a>
                    <a className="list-group-item list-group-item-action" data-toggle="list" href="#hurricanes" role="tab">Carolina Hurricanes</a>
                    <a className="list-group-item list-group-item-action" data-toggle="list" href="#syngenta" role="tab">Syngenta</a>
                  </div>
                </div>
                <div className="col-md-8 col-lg-9 sm-mt-sm">
                  <div className="tab-content">
                  <div id="dzone" className="tab-pane fade show active" role="tabpanel">
                      <p>Senior Software Engineer <span>@ <a className="light-a" href="https://dzone.com" target="_blank" rel="noopener noreferrer">DZone</a></span></p>
                      <p>March 2019 - Present</p>
                      <div>
                        <ul>
                          <li>Designed new content taxonomy based on a hierarchy of tags, sub-zones, and primary zones that could be controlled off-platform and directly influence placement of site content dynamically</li>
                          <li>Implemented middleware to pre-rank the contents of zone list pages, resulting in 100% fewer site outages as a result of heavy traffic to these pages overloading the RDS instance</li>
                          <li>Developed a content bounty system to entice and reward users to write content for specific topics on the site, complete with bounty management and moderation capabilities</li>
                          <li>Implemented redesigned user login and registration systems to convert anonymous users to members with support for progressive profiling and gated assets</li>
                        </ul>
                      </div>
                    </div>
                    <div id="hurricanes" className="tab-pane fade" role="tabpanel">
                      <p>Lead Full Stack Developer <span>@ <a className="light-a" href="https://www.nhl.com/hurricanes" target="_blank" rel="noopener noreferrer">Carolina Hurricanes</a></span></p>
                      <p>January 2017 - March 2019</p>
                      <div>
                        <ul>
                          <li>Migrated in-person auctions to an online presence by developing a custom auction platform with features such as bid history, order history, automatic payment processing, and real-time email and SMS notifications</li>
                          <li>Designed in-house ordering suite system with dynamic food and beverage menus, menu templating system, and admin info portal for user registration, customer orders, and business analytics</li>
                          <li>Developed multiple form-based services with custom invoicing to replace physical forms for promotional requests such as Stormy appearances, Storm Squad, Slap Shot, First Goal upgrades, and Hurricanes Kids Club</li>
                        </ul>
                      </div>
                    </div>
                    <div id="syngenta" className="tab-pane fade" role="tabpanel">
                      <p>Web/GIS Developer <span>@ <a className="light-a" href="https://www.syngenta.com/" target="_blank" rel="noopener noreferrer">Syngenta</a></span></p>
                      <p>June 2016 - January 2017</p>
                      <div>
                        <ul>
                          <li>Developed an application to automatically render a grid overlay on satellite imagery with associated crop metadata on geospatial plots with provided CSV file</li>
                          <li>Implemented a tool to aggregate publicly available MODIS data, weather information, and crop metadata into summarization metrics via ZIP file</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="dark-bg pt-sm pb-lg">
          <div className="container">
            <div className="offset-lg-1 col-lg-9">
              <h1 className="light-text text-center mb-sm">03. Contact me</h1>
              <p className="text-center">Think I could be a potential fit for your company? Contact me via <a className="dark-a" href="https://www.linkedin.com/in/jdoiron94/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
            </div>
          </div>
        </div>
        <div className="pt-xs pb-xs footer">
          <div className="text-center blue-text">Designed and built with <FontAwesomeIcon icon={faHeart}/> and <FontAwesomeIcon icon={faCoffee}/> using <a className="dark-a" href="https://reactjs.org/" target="_target" rel="noopener noreferrer">React</a>, <a className="dark-a" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>, and <a className="dark-a" href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>.</div>
        </div>
      </main>
    );
  }
}

export default App;