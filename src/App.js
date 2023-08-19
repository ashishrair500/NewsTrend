import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
 // const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  return (
    <div>

      <Router>
        <Navbar />
        <LoadingBar 
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={8} country="in" category="general" />}></Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={8} country="in" category="business" />}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={8} country="in" category="entertainment" />}></Route>
          <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={8} country="in" category="general" />}></Route>
          <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={8} country="in" category="health" />}></Route>
          <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={8} country="in" category="science" />}></Route>
          <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={8} country="in" category="sports" />}></Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology}>' pageSize={8} country="in" category="technology" />}></Route>

        </Routes>
      </Router>
    </div>
  )
  }
  export default App;