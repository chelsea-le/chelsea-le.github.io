// Landing page -- what users see on arrival
import React from 'react';
import './css/Project.css'
import Project from './Project';
import Baby from 'babyparse';
import $ from 'jquery';

var ProjectPage = React.createClass({
  getInitialState(){
    return{projects:[]}
  },

  // When the component mounts, get (and parse) the data. Then set the state.
  componentDidMount(){
    $.get('data/projects.csv').then(function(data) {
      var parsed = Baby.parse(data, {header:true});
      this.setState({projects:parsed.data})
    }.bind(this));
  },

    render() {
        return(
            <div className="projectPage">
              <div>
                {this.state.projects.map(function(project, i){
                  console.log(project);
                  return (<Project key={'project-' + i}
                    title={project.Title}
                    date={project.Date}
                    description={project.Description}
                    screenshot={project.Screenshot}
                    contributors={project.Contributors}
                    url={project.url}
                    skills={project.Skills}
                  />)
                })}
              </div>
            </div>
        )
    }
});

export default ProjectPage;
