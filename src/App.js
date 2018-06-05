import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProjects from './Components/AddProject';
import AddProject from './Components/AddProject';

//gateway to main app component
class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        
      ]
    }
  }

  componentWillMount(){
    this.setState({projects:[{
      title: 'business website',
      category: 'web design'
    },
    {
      title: 'social app',
      category: 'mobile development'
    },
    {
      title: 'ecommerce shopping',
      category: 'web design'
    }]})
  }

  render() {
    return (
      <div className="App">
       <AddProject />
       <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
