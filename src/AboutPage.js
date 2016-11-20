//importing documents in to be used in this page
import React from 'react';
import './css/About.css'
import About from './About';
import Baby from 'babyparse';
import $ from 'jquery';

//main component for AboutPage where states are set and pieces from About.js is rendered
var AboutPage = React.createClass({
  getInitialState(){
    return{abouts:[]}
  },

  // When the component mounts, get (and parse) the data. Then set the state.
  componentDidMount(){
    $.get('data/abouts.csv').then(function(data) {
      var parsed = Baby.parse(data, {header:true});
      this.setState({abouts:parsed.data})
    }.bind(this));
  },
    //renders all pieces from abouts.csv file
    render() {
        return(
            <div className="AboutPage">
              <div>
                {this.state.abouts.map(function(about, i){
                  console.log(about);
                  return (<About key={'about-' + i}
                    word={about.word}
                    explanation={about.explanation}
                    image={about.image}
                  />)
                })}
              </div>
            </div>
        )
    }
});

//allows this page to be accessed by other pages
export default AboutPage;
