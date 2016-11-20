//importing documents in to be used in this page
import React from 'react';

//material-ui card components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//component that creates the pieces of project card and properties for it
var Project = React.createClass({
    //onClick to open up projects in new tab
    openLink(url) {
      window.open(url, "_blank")
    },
    //renders the card from material-ui and creates the props to later be called in ProjectPage
    render() {
        return(
            <div>
              <Card className="project-card">
                  <CardHeader
                    title="Contributor(s):"
                    subtitle={this.props.contributors}
                    avatar="imgs/chelsea.jpg"
                  />
                  <CardMedia
                    overlay={<CardTitle title={this.props.title} subtitle={this.props.skills} />}
                  >
                    <img src={'imgs/' + this.props.screenshot} />
                  </CardMedia>
                  <CardTitle title={this.props.title} subtitle={this.props.date} />
                  <CardText>
                    {this.props.description}
                  </CardText>
                  <CardActions>
                    <FlatButton onClick={() => this.openLink(this.props.url)} label="Open Project"/>
                  </CardActions>
                </Card>
            </div>
        )
    }
});


//allows this page to be accessed by other pages
export default Project;
