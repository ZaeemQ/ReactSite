import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

//gateway to main app component
class AddProject extends Component {
 static defaultProps ={
     categories: ["web design", "web developement", "mobile developement"];
 }


  render() {
      let categoryOptions = this.props.categoires.map(category => {
          return <option key ={category} value="category">{category}</option>
      });
    return (
      <div >
       <h3>Add Project</h3>
       <form>
           <div>
            <label>Title</label><br />
            <input type = "text" ref="title" />
            </div>
            <div>
            <label>Category</label><br />
            <select ref="category">
            
            </select>
            </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
