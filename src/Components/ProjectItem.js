import React, { Component } from 'react';

//gateway to main app component
class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
       <strong>{this.props.project.title}</strong>  - {this.props.project.category};
      </li>
    );
  }
}

export default ProjectItem;
