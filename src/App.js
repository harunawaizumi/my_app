import React, { Component } from 'react';
import './App.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import BlogList from './blogs/index'
import styles from './styles'
import AboutMe from './about/index'
import {Route, Switch} from 'react-router-dom'
import Blog001 from './blogs/001_blog'
import Blog002 from './blogs/002_blog'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'blog',
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (value) {
        this.setState({
            value: value,
        });
    };
  render() {
    return (
      <div className="App">
          <div className="App-container">
              <div className="App-header">
                <h1 className="App-title">Haruna Waizumi</h1>
              </div>
              <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
              >
                  <Tab label="About Me" value="about" style={styles.tabHeader}>
                      <AboutMe />
                  </Tab>
                  <Tab label="Blog" value="blog" style={styles.tabHeader}>
                      <BlogList/>
                  </Tab>
              </Tabs>
          </div>
          <div className="App-footer">
            Haruna Waizumi
          </div>
      </div>
    );
  }
}

export default App;
