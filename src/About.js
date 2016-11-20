//importing documents in to be used in this page
import React from 'react';
//material-ui card components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


//component for about that will be passed into AboutPage
var About = React.createClass({
    render() {
        return(
            //material-ui card
            <div>
              <Card className="about-card">
                  <CardTitle title={this.props.word} subtitle={this.props.explanation} />
                  <CardMedia>
                    <img src={'imgs/' + this.props.image} />
                  </CardMedia>
                </Card>
            </div>
        )
    }
});

//allows this page to be called(imported) by others
export default About;
