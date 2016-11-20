import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var About = React.createClass({
    render() {
        return(
            <div>
              <Card className="about-card">
                  <CardTitle title={this.props.word} subtitle={this.props.explanation} />
                  {/* <CardText>
                    {this.props.explanation}
                  </CardText> */}
                  <CardMedia>
                    <img src={'imgs/' + this.props.image} />
                  </CardMedia>
                </Card>
            </div>
        )
    }
});

export default About;
