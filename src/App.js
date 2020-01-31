import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Faculty from "./Faculty";
import Events from "./Events";
import Recruiters from "./Recruiters";
import Alumni from "./Alumni";
import Programmes from "./Programmes";
import Labs from "./Labs";
import Calendar from "./Calendar";
import Statistics from "./Statistics";
import Aboutus from "./Aboutus";
import Vision from "./Vision";
import Management from "./Management";
import Dean from "./Dean";
import Osd from "./Osd";
import Principal from "./Principal";
import Footer from "./Footer";
import Clubs from "./Clubs";
import Mentor from "./Mentor";
import Admission from "./Admission";
import Gallery from "./Gallery";
import Hod from "./Hod";
import Notes from "./Notes";
import Syllabus from "./Syllabus";
import Questionpapers from "./Questionpapers";
import Scheme from "./Scheme";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faculty" component={Faculty} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/recruiters" component={Recruiters} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/programmes" component={Programmes} />
          <Route exact path="/labs" component={Labs} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/placementstatistics" component={Statistics} />
          <Route exact path="/aboutlncts" component={Aboutus} />
          <Route exact path="/vision|mission" component={Vision} />
          <Route exact path="/leadership" component={Management} />
          <Route exact path="/dean" component={Dean} />
          <Route exact path="/osd" component={Osd} />
          <Route exact path="/principal" component={Principal} />
          <Route exact path="/clubs" component={Clubs} />
          <Route exact path="/mentorinfo" component={Mentor} />
          <Route exact path="/admission" component={Admission} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/hod" component={Hod} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/syllabus" component={Syllabus} />
          <Route exact path="/scheme" component={Scheme} />
          <Route
            exact
            path="/previousyearquestionpapers"
            component={Questionpapers}
          />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
