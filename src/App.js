
import React,  { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_API_KEY

  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  } 

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <LoadingBar
        color='red'
        progress={this.state.progress}
      />
      

        <Routes>
          <Route exact path="/" element ={<News setProgress={this.setProgress}   key="general" pageSize ={10} country={'in'} apiKey={this.apiKey} category={"general"}/>} />
          <Route exact path="/business" element={<News setProgress={this.setProgress}  p key="business" pageSize ={10} country={'in'} apiKey={this.apiKey} category={"business"}/>}/>
          <Route exact path="/entertainment" element = {<News setProgress={this.setProgress}  key="entertainment"  pageSize ={10} country={'in'} apiKey={this.apiKey} category={"entertainment"}/>}/>
          <Route exact path="/health" element = {<News setProgress={this.setProgress}  key="health"  pageSize ={10} country={'in'} apiKey={this.apiKey} category={"health"}/>}/>
          <Route exact path="/general" element = {<News setProgress={this.setProgress}  key="general"  pageSize ={10} country={'in'} apiKey={this.apiKey} category={"general"}/>}/>
          <Route exact path="/science" element = {<News setProgress={this.setProgress}  key="science"  pageSize ={10} country={'in'} apiKey={this.apiKey} category={"science"}/>}/>
          <Route exact path="/sports" element = {<News setProgress={this.setProgress}  key="sports"  pageSize ={10} country={'in'} apiKey={this.apiKey} category={"sports"}/>}/>
          <Route exact path="/technology" element = {<News setProgress={this.setProgress}  key="tech"  pageSize ={10} country={'in'} apiKey={this.apiKey} category={"technology"}/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
