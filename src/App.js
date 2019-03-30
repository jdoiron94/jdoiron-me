import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { hot } from 'react-hot-loader';

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
                <a className="nav-link light-a" href="Jacob Doiron Resume.pdf" target="_blank" rel="noopener noreferrer">05. Resume</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="offset-lg-1 col-lg-9 mt-lg mb-lg">
            <div>Hi, my name is</div>
            <h1>Jacob Doiron.</h1>
            <p className="mt-4">I like to build systems.</p>
            <p className="mt-4">I am currently employed by <a className="light-a" href="https://devada.com" target="_blank" rel="noopener noreferrer">Devada</a> as a <span>Software Engineer</span>, working on <a className="light-a" href="https://dzone.com" target="_blank" rel="noopener noreferrer">DZone</a> and DWIGHT.</p>
          </div>
        </div>
        <div id="about" className="dark-bg pt-sm pb-lg">
          <div className="container">
            <div className="offset-lg-1 col-lg-9">
              <h1 className="light-text mb-sm">01. About me</h1>
              <p>I'm a Software Engineer who enjoys watching projects go from ideas and inception to architecting and the journey along the way to the end of the final product.</p>
              <p>I graduated from St. Mary's College of Maryland in the spring of 2016 and have been developing professionally since. My favorite part in the SDLC is breaking down a project into consumable components. Some topics I find interesting in the field are <a className="dark-a" href="https://skymind.ai/wiki/neural-network" target="_blank" rel="noopener noreferrer">Neural Networks</a>, <a className="dark-a" href="https://www.thinkful.com/blog/what-is-data-science/" target="_blank" rel="noopener noreferrer">Data Science</a>, and <a className="dark-a" href="https://www.sas.com/en_us/insights/analytics/computer-vision.html" target="_blank" rel="noopener noreferrer">Computer Vision</a>.</p>
              <p>Here are some technologies I'm familiar with:</p>
              <div>
                <ul className="split-ul">
                  <li className="split-li">Java</li>
                  <li className="split-li">Spring</li>
                  <li className="split-li">Hibernate</li>
                  <li className="split-li">REST</li>
                  <li className="split-li">Python</li>
                  <li className="split-li">JavaScript</li>
                  <li className="split-li">HTML/CSS</li>
                  <li className="split-li">PostgreSQL</li>
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
                    <a className="list-group-item list-group-item-action active" data-toggle="list" href="#hurricanes" role="tab">Carolina Hurricanes</a>
                    <a className="list-group-item list-group-item-action" data-toggle="list" href="#syngenta" role="tab">Syngenta</a>
                  </div>
                </div>
                <div className="col-md-8 col-lg-9 sm-mt-sm">
                  <div className="tab-content">
                    <div id="hurricanes" className="tab-pane fade show active" role="tabpanel">
                      <p>Lead Full Stack Developer <span>@ <a className="light-a" href="https://www.nhl.com/hurricanes" target="_blank" rel="noopener noreferrer">Carolina Hurricanes</a></span></p>
                      <p>January 2017 - March 2019</p>
                      <div>
                        <ul>
                          <li>Created an online role-based platform for the Carolina Hurricanes Foundation which was previously bid accessible only in-person or over the phone.</li>
                          <li>Worked on a suites ordering web application that would allow customers renting suites during events and games to place food and beverage orders online rather than faxing in their orders.</li>
                          <li>Developed a collection of forms used for various departments to collect payment for services and donations.</li>
                        </ul>
                      </div>
                    </div>
                    <div id="syngenta" className="tab-pane fade" role="tabpanel">
                      <p>Web/GIS Developer <span>@ <a className="light-a" href="https://www.syngenta.com/" target="_blank" rel="noopener noreferrer">Syngenta</a></span></p>
                      <p>June 2016 - January 2017</p>
                      <div>
                        <ul>
                          <li>Developed a web app that aggregated publicly available MODIS data, weather information, and crop metadata into rasters.</li>
                          <li>Implemented a tool used to batch process Excel spreadsheets containing crop metadata that automatically subdivided a plot overlayed on satellite imagery representing fields.</li>
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
              <p className="text-center">Think I could be a potential fit for your company? Contact me via <a className="dark-a" href="https://www.linkedin.com/in/jdoiron94/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or send me an <a className="dark-a" href="mailto:jdoiron@smcm.edu" rel="noopener noreferrer">email</a>.</p>
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

export default hot(module)(App);