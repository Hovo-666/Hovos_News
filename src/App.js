import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = "aa2120284eb240f887d335ae26080905"
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}/>

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="us" category="general" />} />
          {/* <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" category="general" />} /> */}
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;