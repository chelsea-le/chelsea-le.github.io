import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var Project = React.createClass({
    openLink(url) {
      window.open(url, "_blank")
    },
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

export default Project;
