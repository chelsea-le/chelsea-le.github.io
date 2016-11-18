// Video component -- show a youtube iframe
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var Project = React.createClass({
    render() {
        return(
            <div>
              <Card className="project-card">
                  <CardHeader
                    title={this.props.contributors}
                    subtitle="Contributor(s)"
                    avatar="imgs/chelsea.jpg"
                  />
                  <CardMedia
                    overlay={<CardTitle title={this.props.title} subtitle={this.props.date} />}
                  >
                    <img src={'imgs/' + this.props.screenshot} />
                  </CardMedia>
                  <CardTitle title={this.props.title} subtitle={this.props.date} />
                  <CardText>
                    {this.props.description}
                  </CardText>
                  <CardActions>
                    {/* onclick opens up to project url */}
                    {/* <FlatButton <a target="_blank" href={this.props.url}>- label="Open Project" </a> /> */}
                    <FlatButton label="Open Project" />
                    {/* <FlatButton label="Action2" /> */}
                  </CardActions>
                </Card>
            </div>
        )
    }
});

export default Project;
