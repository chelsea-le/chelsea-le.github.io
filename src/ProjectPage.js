// Landing page -- what users see on arrival
import React from 'react';
import './css/Project.css'
import Project from './Project';
import Baby from 'babyparse';
import $ from 'jquery';

var ProjectPage = React.createClass({
  getInitialState(){
    return{projects:[], currentProject:0}
  },

  // When the component mounts, get (and parse) the data. Then set the state.
  componentDidMount(){
    $.get('data/projects.csv').then(function(data) {
      var parsed = Baby.parse(data, {header:true});
      this.setState({projects:parsed.data})
    }.bind(this));
  },
  // Function to set the state of the current video
  chooseProject(id){
    this.setState({currentProject:id})
  },

    render() {
        return(
            <div className="project">
              {/* {this.state.projects.map(project, i)
                return(<Project key={'project-' + i} title={projects.title} />)

                )
              }
            } */}
              <h1>For projects</h1>
            </div>
        )
    }
});

export default ProjectPage;
