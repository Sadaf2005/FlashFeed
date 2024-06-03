import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
                height={3}
                color='#378c48'
                progress={this.state.progress}
                // onLoaderFinished={() => setProgress(0)}
           />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={9} category='general' country='in'/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={9} category='business' country='in'/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={9} category='entertainment' country='in'/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={9} category='general' country='in'/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={9} category='health' country='in'/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={9} category='science' country='in'/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={9} category='sports' country='in'/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={9} category='technology' country='in'/>}></Route>
        

          </Routes>
        </Router>
      </div>
    );
  }
}
