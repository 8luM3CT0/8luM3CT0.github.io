import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import RecomVideos from './RecomVideos';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
              <div className="app__page">
                <Sidebar />
            <SearchPage />
            </div>
          </Route>
            <Route path="/">
              <div className="app__page">
                <Sidebar />
                <RecomVideos />
              </div>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
