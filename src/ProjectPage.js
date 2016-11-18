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
                  console.log(i);
                  return (<Project key={'project-' + i}
                    title={project.title}
                    date={project.date}
                    description={project.description}
                    screenshot={project.screenshot}
                    contributors={project.contributors}
                  />)
                })}
              </div>
            </div>
        )
    }
});

export default ProjectPage;
